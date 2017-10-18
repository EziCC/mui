(function(){
    	//{"lat":"30.324915608431123","lon":"103.65439653396606","name":"Unnamed Road, 邛崃市成都市四川省中国"}
	var footHeight = $('#conditionNav').height();
	var contentHeight = document.documentElement.clientHeight - footHeight;
	$('#map').css({ height: contentHeight + "px" });
	MapView.init({
		div: 'map',
		center: { "lat": "30.324915608431123", "lon": "103.65439653396606", "name": "Unnamed Road, 邛崃市成都市四川省中国" },
		callback: function (map) {
			var devices = [{
				id: 1,
				deviceCode: "201615D/T100501490",
				type: 1,
				coordinate: { "lat": "30.65138856009392", "lon": "104.07408714294434", "name": "中国四川省成都市锦江区老半边街31号 邮政编码: 610014" }
			}, {
				id: 2,
				deviceCode: "201615D/T100501492",
				type: 2,
				coordinate: {  "lat": "30.324915608431123", "lon": "103.65439653396606", "name": "中国四川省成都市锦江区四川省电化教育馆（学道街） 邮政编码: 610014" }
			}];
			MapView.showDevices(map, devices);

		}
	});

})()