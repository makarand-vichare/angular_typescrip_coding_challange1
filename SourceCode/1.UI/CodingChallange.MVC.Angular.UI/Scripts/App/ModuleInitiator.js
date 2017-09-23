var App;
(function (App) {
    var ModuleInitiator = (function () {
        function ModuleInitiator() {
        }
        ModuleInitiator.GetModule = function (moduleName) {
            try {
                return angular.module(moduleName);
            }
            catch (error) {
                var dependencies = this.modulesList.filter(function (o) { return o.name == moduleName; }).shift().dependencies;
                return angular.module(moduleName, dependencies);
            }
        };
        ;
        return ModuleInitiator;
    }());
    ModuleInitiator.modulesList = [
        { name: 'App', dependencies: Array() },
        { name: 'Common', dependencies: Array() },
        { name: 'AdminSection', dependencies: Array("ngRoute", "Common", "LocalStorageModule", "angular-loading-bar", "ngMessages") },
        { name: 'HomeSection', dependencies: Array("ngRoute", "Common", "LocalStorageModule", "AdminSection", "angular-loading-bar", "ngMessages") },
        { name: 'UsersSection', dependencies: Array("ngRoute", "Common", "LocalStorageModule", "AdminSection", "angular-loading-bar", "ngMessages") },
    ];
    App.ModuleInitiator = ModuleInitiator;
    App.ModuleInitiator.GetModule("App").service("App.ModuleInitiator", ModuleInitiator);
})(App || (App = {}));
//# sourceMappingURL=ModuleInitiator.js.map