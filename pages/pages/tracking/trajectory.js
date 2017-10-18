(function(){
    //{"lat":"30.324915608431123","lon":"103.65439653396606","name":"Unnamed Road, 邛崃市成都市四川省中国"}
var footHeight = $('.footer_nav').height();
var contentHeight = document.documentElement.clientHeight - footHeight;
$('#map').css({ height: contentHeight + "px" });
MapView.init({
    div: 'map',
    center: { "lat": "30.324915608431123", "lon": "103.65439653396606", "name": "Unnamed Road, 邛崃市成都市四川省中国" },
    callback: function (map) {
        var coordinates = [ {lat: 30.324915608431123, lng: 103.65439653396606},
            {lat: 30.325915608431123, lng: 103.65539653396606},
            {lat: 30.325915608431123, lng: 103.65639653396606},
            {lat: 30.324515608431123, lng: 103.65739653396606},
            {lat: 30.324515608431123, lng: 103.65839653396606},
            {lat: 30.324515608431123, lng: 103.65939653396606}];
        MapView.showTrajectory(map, coordinates);
    }
});

})()