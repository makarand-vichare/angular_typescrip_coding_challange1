module Common.Controllers {
    export class ModelController {
        static $inject = ['$uibModalInstance', 'item'];
        constructor(private $modalInstance: ng.ui.bootstrap.IModalServiceInstance, private item: any) {
            this.selectedItem = item;
        }

        selectedItem: any;

        Submit = () => {
            this.$modalInstance.close(this.selectedItem);
        };

        Close = () => {
            this.$modalInstance.dismiss('cancel');
        };
    }

    App.ModuleInitiator.GetModule("Common").controller("Common.Controllers.ModelController", ModelController);
}