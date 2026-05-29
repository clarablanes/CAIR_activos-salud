var size = 0;
var placement = 'point';

var style_labels_git_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    // Leemos el texto de tu columna 'nombre'
    var value = feature.get("Name") !== null ? String(feature.get("Name")) : "";
    
    var style = [ new ol.style.Style({
        // DIBUJAMOS EL PUNTO (Círculo rojo sólido)
        image: new ol.style.Circle({
            radius: 6.0,
            fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 1.0)'}),
            stroke: new ol.style.Stroke({color: 'rgba(255, 255, 255, 1.0)', width: 2})
        }),
        // DIBUJAMOS EL TEXTO (Siempre visible arriba del punto)
        text: new ol.style.Text({
            font: '13px "Open Sans", sans-serif',
            text: value,
            fill: new ol.style.Fill({color: 'rgba(0, 0, 0, 1.0)'}),
            stroke: new ol.style.Stroke({color: 'rgba(255, 255, 255, 1.0)', width: 3}),
            offsetX: 0,
            offsetY: -15,
            textAlign: 'center'
        })
    })];

    return style;
};
