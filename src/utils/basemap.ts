import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';
import { Tile as TileLayer } from 'ol/layer';
import View from 'ol/View';
import { MapOptions } from 'ol/Map';
import { defaults as interactionDefaults } from 'ol/interaction';
import { Zoom, FullScreen, Attribution } from 'ol/control';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import { Tile as TileSource } from 'ol/source';

interface BasemapLayers {
    standard: TileLayer<TileSource>;
    grau: TileLayer<TileSource>;
    orthophoto: TileLayer<TileSource>;
}

const defaultMapOptions: MapOptions = {
    interactions: interactionDefaults({ mouseWheelZoom: false }),
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

async function getBasemapLayers() {

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

export { defaultMapOptions, getBasemapLayers, BasemapLayers };
