var Common;
(function (Common) {
    var AppConstants = (function () {
        function AppConstants() {
        }
        Object.defineProperty(AppConstants, "SWAPIUrl", {
            get: function () { return "https://swapi.co/api"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(AppConstants, "AuthAPIUrl", {
            get: function () { return "http://localhost:8888"; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(AppConstants, "RandomDistance", {
            get: function () { return 1000000; },
            enumerable: true,
            configurable: true
        });
        ;
        return AppConstants;
    }());
    Common.AppConstants = AppConstants;
    App.ModuleInitiator.GetModule("Common").constant("Common.AppConstants", AppConstants);
})(Common || (Common = {}));
//# sourceMappingURL=AppConstants.js.map