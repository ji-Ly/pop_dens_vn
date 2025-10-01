var wms_layers = [];

var format_gadm41_VNM_shpgadm41_VNM_3shp_0 = new ol.format.GeoJSON();
var features_gadm41_VNM_shpgadm41_VNM_3shp_0 = format_gadm41_VNM_shpgadm41_VNM_3shp_0.readFeatures(json_gadm41_VNM_shpgadm41_VNM_3shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_VNM_shpgadm41_VNM_3shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_VNM_shpgadm41_VNM_3shp_0.addFeatures(features_gadm41_VNM_shpgadm41_VNM_3shp_0);
var lyr_gadm41_VNM_shpgadm41_VNM_3shp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_VNM_shpgadm41_VNM_3shp_0, 
                style: style_gadm41_VNM_shpgadm41_VNM_3shp_0,
                popuplayertitle: 'gadm41_VNM_shp — gadm41_VNM_3.shp',
                interactive: true,
                title: '<img src="styles/legend/gadm41_VNM_shpgadm41_VNM_3shp_0.png" /> gadm41_VNM_shp — gadm41_VNM_3.shp'
            });
var format_gadm41_VNM_shpgadm41_VNM_2shp_1 = new ol.format.GeoJSON();
var features_gadm41_VNM_shpgadm41_VNM_2shp_1 = format_gadm41_VNM_shpgadm41_VNM_2shp_1.readFeatures(json_gadm41_VNM_shpgadm41_VNM_2shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_VNM_shpgadm41_VNM_2shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_VNM_shpgadm41_VNM_2shp_1.addFeatures(features_gadm41_VNM_shpgadm41_VNM_2shp_1);
var lyr_gadm41_VNM_shpgadm41_VNM_2shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_VNM_shpgadm41_VNM_2shp_1, 
                style: style_gadm41_VNM_shpgadm41_VNM_2shp_1,
                popuplayertitle: 'gadm41_VNM_shp — gadm41_VNM_2.shp',
                interactive: true,
                title: '<img src="styles/legend/gadm41_VNM_shpgadm41_VNM_2shp_1.png" /> gadm41_VNM_shp — gadm41_VNM_2.shp'
            });
var format_vnm_v1_zonalstatic_2 = new ol.format.GeoJSON();
var features_vnm_v1_zonalstatic_2 = format_vnm_v1_zonalstatic_2.readFeatures(json_vnm_v1_zonalstatic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vnm_v1_zonalstatic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vnm_v1_zonalstatic_2.addFeatures(features_vnm_v1_zonalstatic_2);
var lyr_vnm_v1_zonalstatic_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vnm_v1_zonalstatic_2, 
                style: style_vnm_v1_zonalstatic_2,
                popuplayertitle: 'vnm_v1_zonalstatic',
                interactive: true,
                title: '<img src="styles/legend/vnm_v1_zonalstatic_2.png" /> vnm_v1_zonalstatic'
            });
var format_vnm_v1_3 = new ol.format.GeoJSON();
var features_vnm_v1_3 = format_vnm_v1_3.readFeatures(json_vnm_v1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vnm_v1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vnm_v1_3.addFeatures(features_vnm_v1_3);
var lyr_vnm_v1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vnm_v1_3, 
                style: style_vnm_v1_3,
                popuplayertitle: 'vnm_v1',
                interactive: true,
                title: '<img src="styles/legend/vnm_v1_3.png" /> vnm_v1'
            });
var lyr_vnm_pop_2020_100m_v1_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'vnm_pop_2020_100m_v1<br />\
    <img src="styles/legend/vnm_pop_2020_100m_v1_4_0.png" /> 0<br />\
    <img src="styles/legend/vnm_pop_2020_100m_v1_4_1.png" /> 668.031<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/vnm_pop_2020_100m_v1_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11370543.728962, 939858.226438, 12186051.762003, 2679655.495183]
        })
    });
var format_vnm_v1_zonalstatic_5 = new ol.format.GeoJSON();
var features_vnm_v1_zonalstatic_5 = format_vnm_v1_zonalstatic_5.readFeatures(json_vnm_v1_zonalstatic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vnm_v1_zonalstatic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vnm_v1_zonalstatic_5.addFeatures(features_vnm_v1_zonalstatic_5);
var lyr_vnm_v1_zonalstatic_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vnm_v1_zonalstatic_5, 
                style: style_vnm_v1_zonalstatic_5,
                popuplayertitle: 'vnm_v1_zonalstatic',
                interactive: true,
                title: '<img src="styles/legend/vnm_v1_zonalstatic_5.png" /> vnm_v1_zonalstatic'
            });
var format_vnm_v2_zonalstatic_6 = new ol.format.GeoJSON();
var features_vnm_v2_zonalstatic_6 = format_vnm_v2_zonalstatic_6.readFeatures(json_vnm_v2_zonalstatic_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vnm_v2_zonalstatic_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vnm_v2_zonalstatic_6.addFeatures(features_vnm_v2_zonalstatic_6);
var lyr_vnm_v2_zonalstatic_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vnm_v2_zonalstatic_6, 
                style: style_vnm_v2_zonalstatic_6,
                popuplayertitle: 'vnm_v2_zonalstatic',
                interactive: true,
                title: '<img src="styles/legend/vnm_v2_zonalstatic_6.png" /> vnm_v2_zonalstatic'
            });
var format_vnm_v3_zonalstatic_7 = new ol.format.GeoJSON();
var features_vnm_v3_zonalstatic_7 = format_vnm_v3_zonalstatic_7.readFeatures(json_vnm_v3_zonalstatic_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vnm_v3_zonalstatic_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vnm_v3_zonalstatic_7.addFeatures(features_vnm_v3_zonalstatic_7);
var lyr_vnm_v3_zonalstatic_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vnm_v3_zonalstatic_7, 
                style: style_vnm_v3_zonalstatic_7,
                popuplayertitle: 'vnm_v3_zonalstatic',
                interactive: true,
    title: 'vnm_v3_zonalstatic<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_0.png" /> 0 - 52<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_1.png" /> 52 - 100<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_2.png" /> 100 - 183<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_3.png" /> 183 - 302<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_4.png" /> 302 - 471<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_5.png" /> 471 - 717<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_6.png" /> 717 - 997<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_7.png" /> 997 - 1396<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_8.png" /> 1396 - 2669<br />\
    <img src="styles/legend/vnm_v3_zonalstatic_7_9.png" /> 2669 - 59530<br />' });

lyr_gadm41_VNM_shpgadm41_VNM_3shp_0.setVisible(true);lyr_gadm41_VNM_shpgadm41_VNM_2shp_1.setVisible(true);lyr_vnm_v1_zonalstatic_2.setVisible(true);lyr_vnm_v1_3.setVisible(true);lyr_vnm_pop_2020_100m_v1_4.setVisible(true);lyr_vnm_v1_zonalstatic_5.setVisible(true);lyr_vnm_v2_zonalstatic_6.setVisible(true);lyr_vnm_v3_zonalstatic_7.setVisible(true);
var layersList = [lyr_gadm41_VNM_shpgadm41_VNM_3shp_0,lyr_gadm41_VNM_shpgadm41_VNM_2shp_1,lyr_vnm_v1_zonalstatic_2,lyr_vnm_v1_3,lyr_vnm_pop_2020_100m_v1_4,lyr_vnm_v1_zonalstatic_5,lyr_vnm_v2_zonalstatic_6,lyr_vnm_v3_zonalstatic_7];
lyr_gadm41_VNM_shpgadm41_VNM_3shp_0.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_gadm41_VNM_shpgadm41_VNM_2shp_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_vnm_v1_zonalstatic_2.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', 'Pop_sum': 'Pop_sum', 'pop_2020': 'pop_2020', });
lyr_vnm_v1_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_vnm_v1_zonalstatic_5.set('fieldAliases', {'NAME_1': 'NAME_1', 'Pop_sum': 'Pop_sum', 'pop_2020': 'pop_2020', 'area': 'area', 'pop_dens': 'pop_dens', });
lyr_vnm_v2_zonalstatic_6.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Pop_sum': 'Pop_sum', });
lyr_vnm_v3_zonalstatic_7.set('fieldAliases', {'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'pop_2020': 'pop_2020', 'are': 'are', 'pop_dens': 'pop_dens', });
lyr_gadm41_VNM_shpgadm41_VNM_3shp_0.set('fieldImages', {'GID_3': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_gadm41_VNM_shpgadm41_VNM_2shp_1.set('fieldImages', {'GID_2': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'NAME_2': '', 'VARNAME_2': '', 'NL_NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'CC_2': '', 'HASC_2': '', });
lyr_vnm_v1_zonalstatic_2.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', 'Pop_sum': 'TextEdit', 'pop_2020': '', });
lyr_vnm_v1_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_vnm_v1_zonalstatic_5.set('fieldImages', {'NAME_1': 'TextEdit', 'Pop_sum': 'TextEdit', 'pop_2020': 'Range', 'area': 'TextEdit', 'pop_dens': 'TextEdit', });
lyr_vnm_v2_zonalstatic_6.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Pop_sum': 'TextEdit', });
lyr_vnm_v3_zonalstatic_7.set('fieldImages', {'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'pop_2020': 'Range', 'are': 'Range', 'pop_dens': 'Range', });
lyr_gadm41_VNM_shpgadm41_VNM_3shp_0.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_gadm41_VNM_shpgadm41_VNM_2shp_1.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_vnm_v1_zonalstatic_2.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', 'Pop_sum': 'no label', 'pop_2020': 'no label', });
lyr_vnm_v1_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_vnm_v1_zonalstatic_5.set('fieldLabels', {'NAME_1': 'no label', 'Pop_sum': 'no label', 'pop_2020': 'no label', 'area': 'no label', 'pop_dens': 'no label', });
lyr_vnm_v2_zonalstatic_6.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', 'Pop_sum': 'no label', });
lyr_vnm_v3_zonalstatic_7.set('fieldLabels', {'NAME_1': 'inline label - always visible', 'NAME_2': 'inline label - always visible', 'NAME_3': 'inline label - always visible', 'TYPE_3': 'inline label - always visible', 'ENGTYPE_3': 'no label', 'pop_2020': 'inline label - always visible', 'are': 'inline label - always visible', 'pop_dens': 'inline label - always visible', });
lyr_vnm_v3_zonalstatic_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});