//地块图标。显示设备-------------
/*参数options:
{
    device: {//设备信息
        id: 1,//设备标识
        deviceCode: "",//设备编号
        coordinate: {//设备位置信息
            lat: '',//
            lon: ''//
        },
        type: 1//设备类别
    },
    clickFun: function(id){//点击设备的回调
        
    },
    operations: [//设备上的操作列表
        {
            icon: '',图标
            clickFun: function(id){//操作按钮点击事件
                
            }
        }
    ]
}
*/
//
function DeviceMarker(map, options) {
    // Now initialize all properties.
    console.log(options.device.coordinate.lat);
    console.log(options.device.coordinate.lon);
	this.latlng = new google.maps.LatLng(options.device.coordinate.lat,options.device.coordinate.lon); // 设置图标的位置
	// this.icon = options.icon; //设置图标的图片
	this.labelText = options.device.deviceCode || '标记';
	this.labelClass = options.labelClass || 'shadow';// 设置文字的样式
	this.clickFun = options.clickFun;// 注册点击事件
    this.index = options.device.id;
    this.btns = options.operations;
	this._map = map;

	this._div = null;
	// Explicitly call setMap() on this overlay
	//       
	this.setMap(map);
}
DeviceMarker.prototype = new google.maps.OverlayView();
// 初始化图标
DeviceMarker.prototype.onAdd = function() {
	// 初始化文字标签
	var label = document.createElement('div');// 创建文字标签
	label.className = this.labelClass;
	label.id = 'mark_' + this.index;
	label.style.zIndex = 100;
	label.style.cursor = "hand";
	label.style.position = 'absolute';
    var html = [];
    html.push('<div class="cjdMkWrap">');
	html.push('<div class="cjdIcon lighting"><i class="icon iconfont icon-zhaoming01"></i></div>');
    html.push('<div class="cjdEngNum">' + this.labelText + '</div>' );
    var h = this.btns.length * 2;
    html.push('<div class="cjdMenu" style="height:'+h+'rem" id="device-menu-'+this.index+'" data-device-id="'+this.index+'">');
    html.push('<ul>');
    $(this.btns).each(function(i,e){
        html.push('<li class="cjdOperate"><i class="'+e.icon+'"></i>'+e.title+'</li>');
    });
    html.push('</ul>');
    html.push('</div>');
    html.push('</div>');
    label.innerHTML = html.join('');
	this._div = label;
	var panes = this.getPanes();
	panes.overlayMouseTarget.appendChild(label);
	var me = this;
	$('#device-menu-'+this.index).find('.cjdOperate').each(function(i,e){
		var _btn = $(e);
		$(e).off().on('click',function(e){
            e.preventDefault(); 
			me.btns[i].clickFun(me.index);
		});
	});
	google.maps.event.addDomListener(label, 'click', function(e){
        e.preventDefault(); 
        console.log('you click:'+me.index);
        $('.cjdMenu').hide();
        var element = $('#device-menu-'+me.index);
        element.show();
        // if(element.is(':hidden')){
        //     element.show();
        // }else{
        //     element.hide();
        // }
        
        
		me.clickFun(me.index);
	});
}
// 绘制图标，主要用于控制图标的位置
DeviceMarker.prototype.draw = function() {
	var overlayProjection = this.getProjection();
	var position = overlayProjection.fromLatLngToDivPixel(this.latlng); // 将地理坐标转换成屏幕坐标
	var div = this._div;
	div.style.left = position.x - 65 + 'px';
	div.style.top = position.y - 40 + 'px';
}