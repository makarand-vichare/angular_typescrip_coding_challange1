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
        return AppConstants;
    }());
    Common.AppConstants = AppConstants;
    var HeardAboutUsList;
    (function (HeardAboutUsList) {
        HeardAboutUsList[HeardAboutUsList["Advert"] = 1] = "Advert";
        HeardAboutUsList[HeardAboutUsList["WordOfMouth"] = 2] = "WordOfMouth";
        HeardAboutUsList[HeardAboutUsList["Other"] = 3] = "Other";
    })(HeardAboutUsList = Common.HeardAboutUsList || (Common.HeardAboutUsList = {}));
    App.ModuleInitiator.GetModule("Common").constant("Common.AppConstants", AppConstants);
})(Common || (Common = {}));
//# sourceMappingURL=AppConstants.js.map