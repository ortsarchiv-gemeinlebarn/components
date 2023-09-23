import { Component, Event, h, Element, EventEmitter, Host, Prop } from '@stencil/core';
import { Map } from 'ol';
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';
import OSM from 'ol/source/OSM';
import { Tile as TileLayer } from 'ol/layer';
import View from 'ol/View';
import { defaults as interactionDefaults } from 'ol/interaction';
import { Zoom, FullScreen, Attribution } from 'ol/control';
import { Tile as TileSource } from 'ol/source';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import { BasemapLayers } from './basemap-layers';

@Component({
    tag: 'oag-map',
    styleUrl: 'oag-map.scss',
    shadow: true,
})
export class OagMap {

    @Event() readyMap: EventEmitter<Map>
    @Element() private element: HTMLElement;

    private osm = new TileLayer({
        source: new OSM(),
        visible: true,
        zIndex: 1,
        properties: { name: 'osm' }
    });
    private basemapLayers?: BasemapLayers;

    private map: Map;

    @Prop()
    public backgroundLayer: 'orthophoto' | 'standard' | 'grau' | 'osm' = 'osm';

    @Prop()
    public disableTouchClass: boolean = true;

    public async componentDidLoad() {

        this.basemapLayers = await this.getBasemapLayers();

        this.map = new Map({
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
            layers: [
                this.osm
            ],
            view: new View({
                center: [
                    1759358.246011,
                    6163096.092720
                ],
                zoom: 15
            })
        });

        this.activeBasemapLayer(this.backgroundLayer);
        this.readyMap.emit(this.map);
    }

    public activeBasemapLayer(backgroundLayer: 'orthophoto' | 'standard' | 'grau' | 'osm') {

        if (backgroundLayer == 'osm')
            return;

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

    private async getBasemapLayers(): Promise<{ standard: TileLayer<TileSource>, grau: TileLayer<TileSource>, orthophoto: TileLayer<TileSource> }> {

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
    }

    public render() {
        return (
            <Host>
                <div id="map" class={{ 'map-element': true, 'no-ol-touch': this.disableTouchClass }}></div>
            </Host>
        );
    }

}
