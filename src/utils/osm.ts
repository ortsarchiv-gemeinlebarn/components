import OSM from 'ol/source/OSM';
import { Tile as TileLayer } from 'ol/layer';

const osm = new TileLayer({
    source: new OSM(),
    visible: true,
    zIndex: 1,
    properties: { name: 'osm' }
});

export { osm };
