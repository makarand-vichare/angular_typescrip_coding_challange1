var AdminSection;
(function (AdminSection) {
    var Controllers;
    (function (Controllers) {
        var AdminHomeController = (function () {
            function AdminHomeController() {
            }
            return AdminHomeController;
        }());
        AdminHomeController.$inject = ["$injector"];
        Controllers.AdminHomeController = AdminHomeController;
        App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.AdminHomeController", AdminHomeController);
    })(Controllers = AdminSection.Controllers || (AdminSection.Controllers = {}));
})(AdminSection || (AdminSection = {}));
//# sourceMappingURL=AdminHomeController.js.map