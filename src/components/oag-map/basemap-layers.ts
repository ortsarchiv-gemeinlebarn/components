
import { Tile as TileLayer } from 'ol/layer';
import { Tile as TileSource } from 'ol/source';

export interface BasemapLayers {
    standard: TileLayer<TileSource>;
    grau: TileLayer<TileSource>;
    orthophoto: TileLayer<TileSource>;
}
