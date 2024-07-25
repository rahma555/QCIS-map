var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Details_2 = new ol.format.GeoJSON();
var features_Details_2 = format_Details_2.readFeatures(json_Details_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Details_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Details_2.addFeatures(features_Details_2);
var lyr_Details_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Details_2, 
                style: style_Details_2,
                popuplayertitle: "Details ",
                interactive: true,
                title: '<img src="styles/legend/Details_2.png" /> Details '
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_Details_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleTerrain_1,lyr_Details_2];
lyr_Details_2.set('fieldAliases', {'landfill': 'landfill', 'Y': 'Y', 'X': 'X', 'open year': 'open year', 'closure year': 'closure year', });
lyr_Details_2.set('fieldImages', {'landfill': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'open year': 'Range', 'closure year': 'TextEdit', });
lyr_Details_2.set('fieldLabels', {'landfill': 'no label', 'Y': 'no label', 'X': 'no label', 'open year': 'no label', 'closure year': 'no label', });
lyr_Details_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});