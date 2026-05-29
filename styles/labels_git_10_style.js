var size = 0;
var placement = 'point';

var style_labels_git_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    // Vamos directos a tu columna 'Label'
    var value = feature.get("Label") !== null ? String(feature.get("Label")) : "";
    
    var style = [ new ol.style.Style({
        // DIBUJAMOS EL PUNTO (Ahora en color NEGRO)
        image: new ol.style.Circle({
            radius: 6.0,
            fill: new ol.style.Fill({color: 'rgba(0, 0, 0, 1.0)'}), // <--- Cambiado a negro (0,0,0)
            stroke: new ol.style.Stroke({color: 'rgba(255, 255, 255, 1.0)', width: 2})
        }),
        // DIBUJAMOS EL TEXTO (Ahora en BOLD y tamaño 15px)
        text: new ol.style.Text({
            font: 'bold 15px "Open Sans", sans-serif', // <--- Añadido 'bold' y subido de 13px a 15px
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
