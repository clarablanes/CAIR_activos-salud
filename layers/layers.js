var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
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
                interactive: false,
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
                interactive: false,
                title: '<img src="styles/legend/2705_R1_2.png" /> 27-05_R1'
            });
var format_2005_R2_3 = new ol.format.GeoJSON();
var features_2005_R2_3 = format_2005_R2_3.readFeatures(json_2005_R2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005_R2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_R2_3.addFeatures(features_2005_R2_3);
var lyr_2005_R2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005_R2_3, 
                style: style_2005_R2_3,
                popuplayertitle: '20-05_R2',
                interactive: false,
                title: '<img src="styles/legend/2005_R2_3.png" /> 20-05_R2'
            });
var format_2005_R3_4 = new ol.format.GeoJSON();
var features_2005_R3_4 = format_2005_R3_4.readFeatures(json_2005_R3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005_R3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_R3_4.addFeatures(features_2005_R3_4);
var lyr_2005_R3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005_R3_4, 
                style: style_2005_R3_4,
                popuplayertitle: '20-05_R3',
                interactive: false,
                title: '<img src="styles/legend/2005_R3_4.png" /> 20-05_R3'
            });
var format_2005_R1_5 = new ol.format.GeoJSON();
var features_2005_R1_5 = format_2005_R1_5.readFeatures(json_2005_R1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2005_R1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2005_R1_5.addFeatures(features_2005_R1_5);
var lyr_2005_R1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2005_R1_5, 
                style: style_2005_R1_5,
                popuplayertitle: '20-05_R1',
                interactive: false,
                title: '<img src="styles/legend/2005_R1_5.png" /> 20-05_R1'
            });
var format_505_R2_6 = new ol.format.GeoJSON();
var features_505_R2_6 = format_505_R2_6.readFeatures(json_505_R2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_505_R2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_505_R2_6.addFeatures(features_505_R2_6);
var lyr_505_R2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_505_R2_6, 
                style: style_505_R2_6,
                popuplayertitle: '5-05_R2',
                interactive: false,
                title: '<img src="styles/legend/505_R2_6.png" /> 5-05_R2'
            });
var format_505_R1_7 = new ol.format.GeoJSON();
var features_505_R1_7 = format_505_R1_7.readFeatures(json_505_R1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_505_R1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_505_R1_7.addFeatures(features_505_R1_7);
var lyr_505_R1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_505_R1_7, 
                style: style_505_R1_7,
                popuplayertitle: '5-05_R1',
                interactive: false,
                title: '<img src="styles/legend/505_R1_7.png" /> 5-05_R1'
            });
var format_505_R3_8 = new ol.format.GeoJSON();
var features_505_R3_8 = format_505_R3_8.readFeatures(json_505_R3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_505_R3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_505_R3_8.addFeatures(features_505_R3_8);
var lyr_505_R3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_505_R3_8, 
                style: style_505_R3_8,
                popuplayertitle: '5-05_R3',
                interactive: false,
                title: '<img src="styles/legend/505_R3_8.png" /> 5-05_R3'
            });
var format_Ruta7_9 = new ol.format.GeoJSON();
var features_Ruta7_9 = format_Ruta7_9.readFeatures(json_Ruta7_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta7_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta7_9.addFeatures(features_Ruta7_9);
var lyr_Ruta7_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta7_9, 
                style: style_Ruta7_9,
                popuplayertitle: 'Ruta7',
                interactive: true,
                title: '<img src="styles/legend/Ruta7_9.png" /> Ruta7'
            });
var format_Ruta6_10 = new ol.format.GeoJSON();
var features_Ruta6_10 = format_Ruta6_10.readFeatures(json_Ruta6_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta6_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta6_10.addFeatures(features_Ruta6_10);
var lyr_Ruta6_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta6_10, 
                style: style_Ruta6_10,
                popuplayertitle: 'Ruta6',
                interactive: true,
                title: '<img src="styles/legend/Ruta6_10.png" /> Ruta6'
            });
var format_Ruta5_11 = new ol.format.GeoJSON();
var features_Ruta5_11 = format_Ruta5_11.readFeatures(json_Ruta5_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta5_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta5_11.addFeatures(features_Ruta5_11);
var lyr_Ruta5_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta5_11, 
                style: style_Ruta5_11,
                popuplayertitle: 'Ruta5',
                interactive: true,
                title: '<img src="styles/legend/Ruta5_11.png" /> Ruta5'
            });
var format_Ruta4_12 = new ol.format.GeoJSON();
var features_Ruta4_12 = format_Ruta4_12.readFeatures(json_Ruta4_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4_12.addFeatures(features_Ruta4_12);
var lyr_Ruta4_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4_12, 
                style: style_Ruta4_12,
                popuplayertitle: 'Ruta4',
                interactive: true,
                title: '<img src="styles/legend/Ruta4_12.png" /> Ruta4'
            });
var format_Ruta3_13 = new ol.format.GeoJSON();
var features_Ruta3_13 = format_Ruta3_13.readFeatures(json_Ruta3_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta3_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta3_13.addFeatures(features_Ruta3_13);
var lyr_Ruta3_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta3_13, 
                style: style_Ruta3_13,
                popuplayertitle: 'Ruta3',
                interactive: true,
                title: '<img src="styles/legend/Ruta3_13.png" /> Ruta3'
            });
var format_Ruta2_14 = new ol.format.GeoJSON();
var features_Ruta2_14 = format_Ruta2_14.readFeatures(json_Ruta2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2_14.addFeatures(features_Ruta2_14);
var lyr_Ruta2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2_14, 
                style: style_Ruta2_14,
                popuplayertitle: 'Ruta2',
                interactive: true,
                title: '<img src="styles/legend/Ruta2_14.png" /> Ruta2'
            });
var format_Ruta1_15 = new ol.format.GeoJSON();
var features_Ruta1_15 = format_Ruta1_15.readFeatures(json_Ruta1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1_15.addFeatures(features_Ruta1_15);
var lyr_Ruta1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1_15, 
                style: style_Ruta1_15,
                popuplayertitle: 'Ruta1',
                interactive: true,
                title: '<img src="styles/legend/Ruta1_15.png" /> Ruta1'
            });
var format_labels_git_16 = new ol.format.GeoJSON();
var features_labels_git_16 = format_labels_git_16.readFeatures(json_labels_git_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_labels_git_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_labels_git_16.addFeatures(features_labels_git_16);
var lyr_labels_git_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_labels_git_16, 
                style: style_labels_git_16,
                popuplayertitle: 'labels_git',
                interactive: true,
                title: '<img src="styles/legend/labels_git_16.png" /> labels_git'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2705_R2_1.setVisible(true);lyr_2705_R1_2.setVisible(true);lyr_2005_R2_3.setVisible(true);lyr_2005_R3_4.setVisible(true);lyr_2005_R1_5.setVisible(true);lyr_505_R2_6.setVisible(true);lyr_505_R1_7.setVisible(true);lyr_505_R3_8.setVisible(true);lyr_Ruta7_9.setVisible(true);lyr_Ruta6_10.setVisible(true);lyr_Ruta5_11.setVisible(true);lyr_Ruta4_12.setVisible(true);lyr_Ruta3_13.setVisible(true);lyr_Ruta2_14.setVisible(true);lyr_Ruta1_15.setVisible(true);lyr_labels_git_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2705_R2_1,lyr_2705_R1_2,lyr_2005_R2_3,lyr_2005_R3_4,lyr_2005_R1_5,lyr_505_R2_6,lyr_505_R1_7,lyr_505_R3_8,lyr_Ruta7_9,lyr_Ruta6_10,lyr_Ruta5_11,lyr_Ruta4_12,lyr_Ruta3_13,lyr_Ruta2_14,lyr_Ruta1_15,lyr_labels_git_16];
lyr_2705_R2_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', });
lyr_2705_R1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', });
lyr_2005_R2_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', 'Ruta': 'Ruta', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_2005_R3_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', });
lyr_2005_R1_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', 'Ruta': 'Ruta', });
lyr_505_R2_6.set('fieldAliases', {'id': 'id', });
lyr_505_R1_7.set('fieldAliases', {'id': 'id', });
lyr_505_R3_8.set('fieldAliases', {'id': 'id', });
lyr_Ruta7_9.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'TITULO': 'TITULO', 'ruta_web': 'ruta_web', });
lyr_Ruta6_10.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'TITULO': 'TITULO', 'ruta_web': 'ruta_web', });
lyr_Ruta5_11.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'TITULO': 'TITULO', 'ruta_web': 'ruta_web', });
lyr_Ruta4_12.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'TITULO': 'TITULO', 'ruta_web': 'ruta_web', });
lyr_Ruta3_13.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'TITULO': 'TITULO', 'ruta_web': 'ruta_web', });
lyr_Ruta2_14.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'TITULO': 'TITULO', 'ruta_web': 'ruta_web', });
lyr_Ruta1_15.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'TITULO': 'TITULO', 'ruta_web': 'ruta_web', });
lyr_labels_git_16.set('fieldAliases', {'fid': 'fid', 'Label': 'Label', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_2705_R2_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', });
lyr_2705_R1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', });
lyr_2005_R2_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', 'Ruta': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_2005_R3_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', });
lyr_2005_R1_5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', 'Ruta': 'TextEdit', });
lyr_505_R2_6.set('fieldImages', {'id': 'TextEdit', });
lyr_505_R1_7.set('fieldImages', {'id': 'TextEdit', });
lyr_505_R3_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Ruta7_9.set('fieldImages', {'fid': 'Hidden', 'photo': 'Hidden', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'TITULO': 'TextEdit', 'ruta_web': 'ExternalResource', });
lyr_Ruta6_10.set('fieldImages', {'fid': 'Hidden', 'photo': 'Hidden', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'TITULO': 'TextEdit', 'ruta_web': 'ExternalResource', });
lyr_Ruta5_11.set('fieldImages', {'fid': 'Hidden', 'photo': 'Hidden', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'TITULO': 'TextEdit', 'ruta_web': 'ExternalResource', });
lyr_Ruta4_12.set('fieldImages', {'fid': 'Hidden', 'photo': 'Hidden', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'TITULO': 'TextEdit', 'ruta_web': 'ExternalResource', });
lyr_Ruta3_13.set('fieldImages', {'fid': 'Hidden', 'photo': 'Hidden', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'TITULO': 'TextEdit', 'ruta_web': 'ExternalResource', });
lyr_Ruta2_14.set('fieldImages', {'fid': 'Hidden', 'photo': 'Hidden', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'TITULO': 'TextEdit', 'ruta_web': 'ExternalResource', });
lyr_Ruta1_15.set('fieldImages', {'fid': 'Hidden', 'photo': 'Hidden', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'TITULO': 'TextEdit', 'ruta_web': 'ExternalResource', });
lyr_labels_git_16.set('fieldImages', {'fid': 'TextEdit', 'Label': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_2705_R2_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', });
lyr_2705_R1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'header label - visible with data', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', });
lyr_2005_R2_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', 'Ruta': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_2005_R3_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', });
lyr_2005_R1_5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'geotracker_meta': 'no label', 'Ruta': 'no label', });
lyr_505_R2_6.set('fieldLabels', {'id': 'no label', });
lyr_505_R1_7.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_505_R3_8.set('fieldLabels', {'id': 'no label', });
lyr_Ruta7_9.set('fieldLabels', {'TITULO': 'no label', 'ruta_web': 'no label', });
lyr_Ruta6_10.set('fieldLabels', {'TITULO': 'no label', 'ruta_web': 'no label', });
lyr_Ruta5_11.set('fieldLabels', {'TITULO': 'no label', 'ruta_web': 'no label', });
lyr_Ruta4_12.set('fieldLabels', {'TITULO': 'no label', 'ruta_web': 'no label', });
lyr_Ruta3_13.set('fieldLabels', {'TITULO': 'no label', 'ruta_web': 'no label', });
lyr_Ruta2_14.set('fieldLabels', {'TITULO': 'no label', 'ruta_web': 'no label', });
lyr_Ruta1_15.set('fieldLabels', {'TITULO': 'no label', 'ruta_web': 'no label', });
lyr_labels_git_16.set('fieldLabels', {'fid': 'no label', 'Label': 'no label', });
lyr_labels_git_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});