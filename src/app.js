window.openCockpit = () => document.getElementsByTagName('oag-cockpit')[0].setAttribute('visible', 'true');
window.openScreenMap = () => document.getElementsByTagName('oag-screen-map')[0].setAttribute('visible', 'true');

const loading = document.getElementById('loading');
setTimeout(() => loading.style.display = 'none', 100);

// Map Fundorte
document.getElementById("map-fundort").addEventListener("readyMap", ($event) => {
    const map = $event.detail;

    map.getView().setCenter([1758924.107577, 6163175.814151]);
    map.getView().setZoom(17);

    map.addLayer(new ol.layer.Vector({
        source: new ol.source.Vector({
            // features: new ol.format.GeoJSON({ featureProjection: 'EPSG:3857' }).readFeatures(fundort),
            styles: [
                new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'blue',
                        width: 3,
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(0, 0, 255, 1)',
                    }),
                }),
            ]
        })
    }));
});

let screenMap;

document.querySelector("oag-screen-map").addEventListener("readyMap", ($event) => {
    screenMap = $event.detail;

    screenMap.getView().setCenter([1758924.107577, 6163175.814151]);
    screenMap.getView().setZoom(10);
});

document.querySelectorAll('oag-screen-content-layer-item').forEach(el => {
    el.addEventListener('showLayer', event => console.log(event));
    el.addEventListener('hideLayer', event => console.log(event));
    el.addEventListener('highlightLayer', event => { console.log("highlightLayer!") })
});

document.querySelectorAll('oag-screen-background-layer-item').forEach(el => {
    el.addEventListener('click', event => {

        const slug = event.srcElement.getAttribute('slug');

        document.querySelectorAll('oag-screen-background-layer-item').forEach(e => e.setAttribute('active', 'false'));
        event.srcElement.setAttribute('active', 'true');

        screenMap.getLayers().forEach(l => {
            console.log(l.values_.name);
            l.setVisible(l.values_.name.indexOf(slug) > -1)
        });

    });
});
