ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reprojet_1 = new ol.format.GeoJSON();
var features_Reprojet_1 = format_Reprojet_1.readFeatures(json_Reprojet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojet_1.addFeatures(features_Reprojet_1);
var lyr_Reprojet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojet_1, 
                style: style_Reprojet_1,
                interactive: true,
                title: '<img src="styles/legend/Reprojet_1.png" /> Reprojeté'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Reprojet_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Reprojet_1];
lyr_Reprojet_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOM_DEL_AR': 'NOM_DEL_AR', 'NOM_DEL_FR': 'NOM_DEL_FR', 'GOUV_AR': 'GOUV_AR', 'GOUV_FR': 'GOUV_FR', 'SURFACE': 'SURFACE', 'texte': 'texte', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Reprojet_1.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NOM_DEL_AR': 'TextEdit', 'NOM_DEL_FR': 'TextEdit', 'GOUV_AR': 'TextEdit', 'GOUV_FR': 'TextEdit', 'SURFACE': 'TextEdit', 'texte': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Reprojet_1.set('fieldLabels', {'OBJECTID': 'header label', 'ID': 'no label', 'NOM_DEL_AR': 'no label', 'NOM_DEL_FR': 'header label', 'GOUV_AR': 'no label', 'GOUV_FR': 'inline label', 'SURFACE': 'inline label', 'texte': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Reprojet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});