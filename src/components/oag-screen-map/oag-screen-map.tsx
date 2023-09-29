import { Component, Event, h, Element, EventEmitter, Host, Prop } from '@stencil/core';
import { Map } from 'ol';
import OSM from 'ol/source/OSM';
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

    @Event() readyMap: EventEmitter<Map>
    @Element() private element: HTMLElement;

    @Prop()
    public backgroundLayer: 'orthophoto' | 'standard' | 'grau' | 'osm' = 'orthophoto';

    @Prop() public opened: boolean = false;
    @Prop() public labelOpen: string = 'Karte öffnen';
    @Prop() public labelClose: string = 'Karte schließen';

    private basemapLayers?: BasemapLayers;
    private map: Map;

    public osm = new TileLayer({
        source: new OSM(),
        visible: true,
        zIndex: 1,
        properties: { name: 'osm' }
    });

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
            layers: [this.osm],
            view: new View({
                center: [
                    1759358.246011,
                    6163096.092720
                ],
                zoom: 15
            })
        };

        this.map = new Map(mapOptions);

        this.setBasemapLayer(this.backgroundLayer);
        this.readyMap.emit(this.map);
    }

    public open() {
        this.opened = true;
    }

    public close() {
        this.opened = false;
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

        this.osm.setVisible(false);

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
            <Host class={{ 'is-opened': this.opened }}>
                <div class="open" onClick={() => this.open()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                    <span>{this.labelOpen}</span>
                </div>
                <div class="close" onClick={() => this.close()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320L192 192M192 320l128-128" /></svg>
                    <span>{this.labelClose}</span>
                </div>
                <div class="screen">
                    <div class="screen__container">
                        <div class="map" id="map"></div>
                        <div class="content">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

}
