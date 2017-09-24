var Common;
(function (Common) {
    var Controllers;
    (function (Controllers) {
        var ModelController = (function () {
            function ModelController($modalInstance, item) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                this.item = item;
                this.Submit = function () {
                    _this.$modalInstance.close(_this.selectedItem);
                };
                this.Close = function () {
                    _this.$modalInstance.dismiss('cancel');
                };
                this.selectedItem = item;
            }
            return ModelController;
        }());
        ModelController.$inject = ['$uibModalInstance', 'item'];
        Controllers.ModelController = ModelController;
        App.ModuleInitiator.GetModule("Common").controller("Common.Controllers.ModelController", ModelController);
    })(Controllers = Common.Controllers || (Common.Controllers = {}));
})(Common || (Common = {}));
//# sourceMappingURL=ModelController.js.map