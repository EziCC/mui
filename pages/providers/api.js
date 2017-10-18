/**
 * 数据访问对象封装
 */
;
(function ($) {
    var ajaxResult = {
        "SUCCESS": "000000",
        "ACCEPT": "000001",
        "PARAM_EMPTY": "100000",
        "PARAM_FORMAT_ERROR": "100001",
        "SYSTEM_BUSY": "100002",
        "DATA_NOT_EXIST": "100003",
        "DATA_ALREADY_EXIST": "100004",
        "NOT_LOGIN": "100005",
        "NOT_PERMISSION": "100006",
        "USER_LOCKED": "100007",
        "VCODE_ERROR": "100008",
        "USERNAME_OR_PASSWORD_ERROR": "100009",
        "OLD_PASSWORD_ERROR": "100010",
        "QR_NOT_LOGIN": "100011"
    };
    var API = function () {
        var href = window.location.href;
        this.host = 'http://localhost:8080/rest';
    };
    API.prototype = {
        get: function (uri, params, callback, failcallback) {
            var _self = this;
            if (params["global"] == undefined) {
                params["global"] = true;
            }
            if (params["async"] == undefined) {
                params["async"] = true;
            }
            params['rnd'] = Math.random();
            $.ajax({
                url: _self.host + uri,
                dataType: 'json',
                data: params,
                global: params["global"],
                type: "get",
                async: params["async"],
                timeout: 60000,
                success: function (data) {
                    if (data && data.message && ajaxResult.SUCCESS == data.code) {
                        callback = callback || function () { };
                        callback(data);
                    } else if (data && data.message && ajaxResult.NOT_LOGIN == data.code) {
                        window.location.refresh();
                    }
                    else {
                        failcallback = failcallback || function () { };
                        failcallback(data);
                    }
                },
                error: function () {
                    failcallback = failcallback || function () { };
                    failcallback();
                }
            });
        },
        post: function (uri, params, callback, failcallback) {
            var _self = this;
            if (params["global"] == undefined) {
                params["global"] = true;
            }
            if (params["async"] == undefined) {
                params["async"] = true;
            }
            params['rnd'] = Math.random();
            $.ajax({
                url: _self.host + uri,
                dataType: 'json',
                data: params,
                global: params["global"],
                type: "post",
                async: params["async"],
                timeout: 60000,
                success: function (data) {
                    if (data && data.message && ajaxResult.SUCCESS == data.code) {
                        callback = callback || function () { };
                        callback(data);
                    } else if (data && data.message && ajaxResult.NOT_LOGIN == data.code) {
                        window.location.refresh();
                    }
                    else {
                        failcallback = failcallback || function () { };
                        failcallback(data);
                    }
                },
                error: function () {
                    failcallback = failcallback || function () { };
                    failcallback();
                }
            });
        },
        /**
         * 
         */
        getUserInfo:function(options, callback){//查询当前登录的用户信息

        },
        /**
         * 
         */
        getValidCode: function(options, callback){//获取验证码

        },
        /**
         * 
         */
        bindMobile: function(options, callback){//绑定手机号码

        },
        /**
         * 
         */
        saveUserInfo: function(options, callback){//更新用户信息

        },

        /**
         * 参数说明：{type:type}
         */
        queryMyDevices: function (options, callback) {// 获取当前用户所有设备列表
            var _self = this;
            _self.get("/devices?type=" + options.type, {
            }, function (data) {
                callback(data.data);
            }, function () {
                callback({});
            });
        },
        /**
         * 参数说明：{deviceId: deviceId}
         */
        getDeviceInfo: function (options, callback) {//获取设备信息
            var _self = this;
            _self.get("/devices/" + options.deviceId, {
            }, function (data) {
                if (data.code == '000000') {
                    callback(data.data);
                }
            });
        },
        /**
         * 参数说明：{name:name}
         */
        updateDevice: function (options, callback) {//更新设备名称

        },
        /**
         * 参数说明：{deviceId: deviceId}
         */
        addDevice: function (options, callback) {// 添加设备关联

        },
        /**
         * 参数说明{deviceId: deviceId}
         */
        removeDevice: function (options, callback) {// 删除设备关联
            var _self = this;
            _self.post("/devices/remove", {
                "deviceId": options.deviceId
            }, function (data) {
                callback(data.data);
            });
        },
        /**
         * 
         */
        queryData: function (options, callback) {//设备数据查询
            // 获取所有地块
            var _self = this;
            _self.get("/envdata", {
                "deviceId": options.deviceId,
                "startDate": options.startDate,
                "endDate": options.endDate,
                "ipage": options.ipage,
                "size": options.size
            }, function (data) {
                callback(data.data);
            }, function () {
                callback({});
            });
        },
        /**
         * 
         */
        queryTracjectories: function(options, callabck){//查询设备移动轨迹

        },
        /**
         * 
         */
        queryAlertsDevices: function(options, callback){//查询告警设备列表

        },

        /**
         * 
         */
        getAlertInfo: function(options, callback){//查询告警详情

        },
        /**
         * 
         */
        alertSetting: function(options, callback){//告警开关设置

        },

        /**
         * 
         */
        control: function (options, callback) {//设备控制接口
            var _self = this;
            _self.post("/devices/"+options.deviceId+"/control", {
                "cmd": options.cmd
            }, function (data) {
                callback(data.data);
            }, function () {
                callback({});
            });
        },
        /**
         * 
         */
        getConfig: function (options, callback) {//设备配置查询
            var _self = this;
            _self.get("/devices/"+options.deviceId+"/setting", {
            }, function (data) {
                callback(data.data);
            }, function () {
                callback({});
            });
        },
        /**
         * 
         */
        queryFaultReports: function(options, callback){//故障申报列表

        },
        /**
         * 
         */
        getFaultReport: function(options, callback){//查询故障申告详细

        },
        /**
         * 
         */
        createFaultReport: function(options, callback){//发起申告

        }
    };
    window.API = new API;
})($);