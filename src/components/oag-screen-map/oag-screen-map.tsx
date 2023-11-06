import { Component, Event, h, Element, EventEmitter, Host, Prop } from '@stencil/core';
import { Map } from 'ol';
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';
import { Tile as TileLayer } from 'ol/layer';
import View from 'ol/View';
import { MapOptions } from 'ol/Map';
import { defaults as interactionDefaults } from 'ol/interaction';
import { Zoom, FullScreen, Attribution } from 'ol/control';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import { BasemapLayers } from '../../utils/basemap';

@Component({
    tag: 'oag-screen-map',
    styleUrl: 'oag-screen-map.scss',
    shadow: true,
})
export class OagScreenMap {

    @Prop({ reflect: true, mutable: true }) visible: boolean | 'init' = 'init';
    @Element() private element: HTMLElement;

    @Event() readyMap: EventEmitter<Map>;

    @Prop()
    public disableTouchClass: boolean = true;

    @Prop()
    public backgroundLayer: 'orthophoto' | 'standard' | 'grau' | 'osm' = 'orthophoto';

    private basemapLayers?: BasemapLayers;
    private map: Map;

    public close = () => {
        this.element.setAttribute('visible', 'false');
    }

    public async componentDidLoad() {
        this.basemapLayers = await this.getBasemapLayers();
        const mapOptions: MapOptions = {
            target: this.element.shadowRoot.getElementById("map"),
            interactions: interactionDefaults(),
            controls: [
                new Zoom(),
                new FullScreen(),
                new Attribution({
                    collapsible: true,
                    collapsed: true
                })
            ],
            layers: [],
            view: new View({
                center: [
                    1759358.246011,
                    6163096.092720
                ],
                zoom: 15
            })
        };

        this.map = new Map(mapOptions);
        this.readyMap.emit(this.map);
    }

    public async getBasemapLayers() {

        const parser = new WMTSCapabilities();
        const response = await fetch('https://mapsneu.wien.gv.at/basemapneu/1.0.0/WMTSCapabilities.xml');
        const text = await response.text();
        const result = parser.read(text);

        const standard = new WMTS(optionsFromCapabilities(result, {
            layer: 'geolandbasemap',
            matrixSet: 'EPSG:3857'
        }));

        const grau = new WMTS(optionsFromCapabilities(result, {
            layer: 'bmapgrau',
            matrixSet: 'EPSG:3857'
        }));

        const orthophoto = new WMTS(optionsFromCapabilities(result, {
            layer: 'bmaporthofoto30cm',
            matrixSet: 'EPSG:3857'
        }));

        standard.setAttributions("basemap.at");
        grau.setAttributions("basemap.at");
        orthophoto.setAttributions("basemap.at");

        return {
            standard: new TileLayer({
                source: standard,
                zIndex: 2,
                properties: { name: 'basemap-standard' }
            }),
            grau: new TileLayer({
                source: grau,
                zIndex: 3,
                properties: { name: 'basemap-grau' }
            }),
            orthophoto: new TileLayer({
                source: orthophoto,
                zIndex: 4,
                properties: { name: 'basemap-orthophoto' }
            })
        };
    };

    public setBasemapLayer(backgroundLayer: 'orthophoto' | 'standard' | 'grau' | 'osm') {

        if (!this.basemapLayers || backgroundLayer == 'osm') {
            return;
        }

        if (backgroundLayer == 'orthophoto') {
            this.map.addLayer(this.basemapLayers?.orthophoto);
        }
        else if (backgroundLayer == 'standard') {
            this.map.addLayer(this.basemapLayers?.standard);
        }
        else if (backgroundLayer == 'grau') {
            this.map.addLayer(this.basemapLayers?.grau);
        }
    }

    render() {
        return (
            <Host>
                <div class="container">
                    <div id="map" class={{ 'map': true, 'no-ol-touch': this.disableTouchClass }}></div>
                    <div class="content">
                        <slot></slot>
                    </div>

                    <oag-menu-item class="close" onClick={() => this.close()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128" /></svg>
                        <span>Übersichtskarte schließen</span>
                    </oag-menu-item>
                </div>
            </Host>
        );
    }

}
