var Common;
(function (Common) {
    var Controllers;
    (function (Controllers) {
        var BaseController = (function () {
            function BaseController(injectorService) {
                var _this = this;
                this.injectorService = injectorService;
                this.ProcessInfo = { Message: "" };
                this.GetQueryStringData = function (url) {
                    var self = _this;
                    var indexQuestionMark = url.indexOf("?");
                    if (indexQuestionMark >= 0) {
                        return url.substr(indexQuestionMark + 1);
                    }
                    else {
                        return "";
                    }
                };
                this.ParseQueryString = function (queryString) {
                    var data = {};
                    var pairs;
                    var pair;
                    var separatorIndex;
                    var escapedKey;
                    var escapedValue;
                    var key;
                    var value;
                    if (queryString === null) {
                        return data;
                    }
                    pairs = queryString.split("&");
                    for (var i = 0; i < pairs.length; i++) {
                        pair = pairs[i];
                        separatorIndex = pair.indexOf("=");
                        if (separatorIndex === -1) {
                            escapedKey = pair;
                            escapedValue = null;
                        }
                        else {
                            escapedKey = pair.substr(0, separatorIndex);
                            escapedValue = pair.substr(separatorIndex + 1);
                        }
                        key = decodeURIComponent(escapedKey);
                        value = decodeURIComponent(escapedValue);
                        data[key] = value;
                    }
                    return data;
                };
                this.windowService = injectorService.get("$window");
                this.locationService = injectorService.get("$location");
                this.logService = injectorService.get("$log");
            }
            BaseController.prototype.StartProcess = function () {
                var self = this;
                self.ProcessInfo = {
                    Message: "loading..",
                    Loading: true,
                    IsSucceed: false
                };
            };
            BaseController.prototype.EndProcess = function (message, isSucceed) {
                var self = this;
                self.ProcessInfo = {
                    Message: message,
                    Loading: false,
                    IsSucceed: isSucceed
                };
            };
            BaseController.prototype.GetFragment = function (url) {
                var self = this;
                var queryStringData = self.GetQueryStringData(url);
                if (queryStringData.length >= 0) {
                    return self.ParseQueryString(queryStringData);
                }
                else {
                    return {};
                }
            };
            return BaseController;
        }());
        BaseController.$inject = ["$injector"];
        Controllers.BaseController = BaseController;
    })(Controllers = Common.Controllers || (Common.Controllers = {}));
})(Common || (Common = {}));
//# sourceMappingURL=basecontroller.js.map