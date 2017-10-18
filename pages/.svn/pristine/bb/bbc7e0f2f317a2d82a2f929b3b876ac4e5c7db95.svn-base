/**
 * 地图主体框架 地图初始化；地块数据加载和呈现
 */
;
(function ($) {
    var MapView = function () {
        this.map = null;
    }
    MapView.prototype = {
        init: function (options) {
            var _self = this;
            var mapOptions = {
                center: new google.maps.LatLng(options.center.lat, options.center.lon),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
            // div显示地图
            this.map = new google.maps.Map(document.getElementById(options.div),
                mapOptions);
            if (options.callback) {
                options.callback(this.map);
            }
        },
        getMap: function () {
            return this.map;
        },
        //显示设备
        showDevices: function (map, devices, btns) {
            var _self = this;
            console.log(devices.length);
            $(devices).each(function (i, e) {
                var marker = new DeviceMarker(map,{
                    device : e,
                    clickFun:function(id){
                        //选中。
                    },
                    operations:btns
                });
            });
        },
        //显示轨迹
        showTrajectory: function(map, paths){
            var flightPath = new google.maps.Polyline({
                path: paths,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
              });
            flightPath.setMap(map);
        },
        getLocation: function (lat, lng, callback) {
            $.ajax({
                async: false,
                url: 'https://ditu.google.cn/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&language=zh-CN&sensor=false',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (data && data.results && data.results.length > 0) {
                        callback(data.results[0].formatted_address);
                    } else {
                        callback('');
                    }
                }
            });
        }
    };
    window.MapView = new MapView;
})($);