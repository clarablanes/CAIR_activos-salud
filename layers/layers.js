var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2705_R2_1 = new ol.format.GeoJSON();
var features_2705_R2_1 = format_2705_R2_1.readFeatures(json_2705_R2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2705_R2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2705_R2_1.addFeatures(features_2705_R2_1);
var lyr_2705_R2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2705_R2_1, 
                style: style_2705_R2_1,
                popuplayertitle: '27-05_R2',
                interactive: true,
                title: '<img src="styles/legend/2705_R2_1.png" /> 27-05_R2'
            });
var format_2705_R1_2 = new ol.format.GeoJSON();
var features_2705_R1_2 = format_2705_R1_2.readFeatures(json_2705_R1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2705_R1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2705_R1_2.addFeatures(features_2705_R1_2);
var lyr_2705_R1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2705_R1_2, 
                style: style_2705_R1_2,
                popuplayertitle: '27-05_R1',
                interactive: true,
                title: '<img src="styles/legend/2705_R1_2.png" /> 27-05_R1'
            });
var format_2005_R3_3 = new ol.format.GeoJSON();
var features_2005_R3_3 = format_2005_R3_3.readFeatures(json_2005_R3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005_R3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_R3_3.addFeatures(features_2005_R3_3);
var lyr_2005_R3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005_R3_3, 
                style: style_2005_R3_3,
                popuplayertitle: '20-05_R3',
                interactive: true,
                title: '<img src="styles/legend/2005_R3_3.png" /> 20-05_R3'
            });
var format_2005_R2_4 = new ol.format.GeoJSON();
var features_2005_R2_4 = format_2005_R2_4.readFeatures(json_2005_R2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005_R2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_R2_4.addFeatures(features_2005_R2_4);
var lyr_2005_R2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005_R2_4, 
                style: style_2005_R2_4,
                popuplayertitle: '20-05_R2',
                interactive: true,
                title: '<img src="styles/legend/2005_R2_4.png" /> 20-05_R2'
            });
var format_img_20_05_R1_5 = new ol.format.GeoJSON();
var features_img_20_05_R1_5 = format_img_20_05_R1_5.readFeatures(json_img_20_05_R1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_img_20_05_R1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_img_20_05_R1_5.addFeatures(features_img_20_05_R1_5);
var lyr_img_20_05_R1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_img_20_05_R1_5, 
                style: style_img_20_05_R1_5,
                popuplayertitle: 'img_20_05_R1',
                interactive: true,
    title: 'img_20_05_R1<br />\
    <img src="styles/legend/img_20_05_R1_5_0.png" /> <br />\
    <img src="styles/legend/img_20_05_R1_5_1.png" /> BIENESTAR<br />\
    <img src="styles/legend/img_20_05_R1_5_2.png" /> OCIO<br />\
    <img src="styles/legend/img_20_05_R1_5_3.png" /> SALUD<br />\
    <img src="styles/legend/img_20_05_R1_5_4.png" /> TIENDAS<br />' });
var format_2005_R1_6 = new ol.format.GeoJSON();
var features_2005_R1_6 = format_2005_R1_6.readFeatures(json_2005_R1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005_R1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_R1_6.addFeatures(features_2005_R1_6);
var lyr_2005_R1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005_R1_6, 
                style: style_2005_R1_6,
                popuplayertitle: '20-05_R1',
                interactive: true,
                title: '<img src="styles/legend/2005_R1_6.png" /> 20-05_R1'
            });
var format_505_R3_7 = new ol.format.GeoJSON();
var features_505_R3_7 = format_505_R3_7.readFeatures(json_505_R3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_505_R3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_505_R3_7.addFeatures(features_505_R3_7);
var lyr_505_R3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_505_R3_7, 
                style: style_505_R3_7,
                popuplayertitle: '5-05_R3',
                interactive: true,
                title: '<img src="styles/legend/505_R3_7.png" /> 5-05_R3'
            });
var format_505_R2_8 = new ol.format.GeoJSON();
var features_505_R2_8 = format_505_R2_8.readFeatures(json_505_R2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_505_R2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_505_R2_8.addFeatures(features_505_R2_8);
var lyr_505_R2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_505_R2_8, 
                style: style_505_R2_8,
                popuplayertitle: '5-05_R2',
                interactive: true,
                title: '<img src="styles/legend/505_R2_8.png" /> 5-05_R2'
            });
var format_505_R1_9 = new ol.format.GeoJSON();
var features_505_R1_9 = format_505_R1_9.readFeatures(json_505_R1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_505_R1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_505_R1_9.addFeatures(features_505_R1_9);
var lyr_505_R1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_505_R1_9, 
                style: style_505_R1_9,
                popuplayertitle: '5-05_R1',
                interactive: true,
                title: '<img src="styles/legend/505_R1_9.png" /> 5-05_R1'
            });
var format_labels_git_10 = new ol.format.GeoJSON();
var features_labels_git_10 = format_labels_git_10.readFeatures(json_labels_git_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_labels_git_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_labels_git_10.addFeatures(features_labels_git_10);
var lyr_labels_git_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_labels_git_10, 
                style: style_labels_git_10,
                popuplayertitle: 'labels_git',
                interactive: true,
                title: '<img src="styles/legend/labels_git_10.png" /> labels_git'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2705_R2_1.setVisible(true);lyr_2705_R1_2.setVisible(true);lyr_2005_R3_3.setVisible(true);lyr_2005_R2_4.setVisible(true);lyr_img_20_05_R1_5.setVisible(true);lyr_2005_R1_6.setVisible(true);lyr_505_R3_7.setVisible(true);lyr_505_R2_8.setVisible(true);lyr_505_R1_9.setVisible(true);lyr_labels_git_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2705_R2_1,lyr_2705_R1_2,lyr_2005_R3_3,lyr_2005_R2_4,lyr_img_20_05_R1_5,lyr_2005_R1_6,lyr_505_R3_7,lyr_505_R2_8,lyr_505_R1_9,lyr_labels_git_10];
lyr_2705_R2_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', });
lyr_2705_R1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', });
lyr_2005_R3_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', });
lyr_2005_R2_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', 'Ruta': 'Ruta', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_img_20_05_R1_5.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Categoria': 'Categoria', });
lyr_2005_R1_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', 'Ruta': 'Ruta', });
lyr_505_R3_7.set('fieldAliases', {'id': 'id', });
lyr_505_R2_8.set('fieldAliases', {'id': 'id', });
lyr_505_R1_9.set('fieldAliases', {'id': 'id', });
lyr_labels_git_10.set('fieldAliases', {'fid': 'fid', 'Label': 'Label', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_2705_R2_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', });
lyr_2705_R1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', });
lyr_2005_R3_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', });
lyr_2005_R2_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', 'Ruta': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_img_20_05_R1_5.set('fieldImages', {'fid': 'Hidden', 'photo': 'ExternalResource', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'Categoria': 'TextEdit', });
lyr_2005_R1_6.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', 'Ruta': 'TextEdit', });
lyr_505_R3_7.set('fieldImages', {'id': 'TextEdit', });
lyr_505_R2_8.set('fieldImages', {'id': 'TextEdit', });
lyr_505_R1_9.set('fieldImages', {'id': 'TextEdit', });
lyr_labels_git_10.set('fieldImages', {'fid': 'TextEdit', 'Label': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_2705_R2_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', });
lyr_2705_R1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', });
lyr_2005_R3_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', });
lyr_2005_R2_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', 'Ruta': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'header label - always visible', 'auxiliary_storage_labeling_lineanchorclipping': 'header label - always visible', 'auxiliary_storage_labeling_lineanchortype': 'header label - always visible', 'auxiliary_storage_labeling_lineanchortextpoint': 'header label - always visible', });
lyr_img_20_05_R1_5.set('fieldLabels', {'photo': 'no label', 'Categoria': 'no label', });
lyr_2005_R1_6.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', 'Ruta': 'no label', });
lyr_505_R3_7.set('fieldLabels', {'id': 'no label', });
lyr_505_R2_8.set('fieldLabels', {'id': 'no label', });
lyr_505_R1_9.set('fieldLabels', {'id': 'no label', });
lyr_labels_git_10.set('fieldLabels', {'fid': 'no label', 'Label': 'inline label - always visible', });
lyr_labels_git_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});