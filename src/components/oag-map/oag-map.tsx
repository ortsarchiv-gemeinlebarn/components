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
    tag: 'oag-map',
    styleUrl: 'oag-map.scss',
    shadow: true,
})
export class OagMap {

    @Event() readyMap: EventEmitter<Map>
    @Element() private element: HTMLElement;

    @Prop()
    public backgroundLayer: 'orthophoto' | 'standard' | 'grau' | 'osm' = 'osm';

    @Prop()
    public disableTouchClass: boolean = true;

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
            interactions: interactionDefaults({ mouseWheelZoom: false }),
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

    public render() {
        return (
            <Host>
                <div id="map" class={{ 'map-element': true, 'no-ol-touch': this.disableTouchClass }}></div>
            </Host>
        );
    }

}
