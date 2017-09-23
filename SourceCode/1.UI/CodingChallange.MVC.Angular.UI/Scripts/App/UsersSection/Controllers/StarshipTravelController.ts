
module UsersSection.Controllers
{
    export class StarshipTravelController extends Common.Controllers.BaseController
    {
        static $inject = ["$injector","$uibModal", "UsersSection.Services.StarshipTravelService", "AdminSection.Services.PlanetService"];
        constructor(_injectorService: ng.auto.IInjectorService, private modelService: ng.ui.bootstrap.IModalService,  private starshipTravelService: UsersSection.Interfaces.IStarshipTravelService, private planetService: AdminSection.Interfaces.IPlanetService )
        {
            super( _injectorService );
        }

        starshipModel = {
            starships: new Array<AdminSection.ViewModels.IStarshipVM>(),
            next: '',
            previous: ''
        };
        onlyNumbers = /^[1-9][0-9]*$/;
        planetDistance: number = 1000000;
        showModal = false;
        private selectedStarship: AdminSection.ViewModels.IStarshipVM;
        //OpenModel = (starship: AdminSection.ViewModels.IStarshipVM) => {
        //    var options: ng.ui.bootstrap.IModalSettings = {
        //        templateUrl: 'modal.html',
        //        controller: Common.Controllers.ModelController + ' as modal',
        //        resolve: {
        //            item: () => starship // <- this will pass the same instance 
        //            // of the item displayed in the table to the modal
        //        }
        //    };

        //    //this.$modal.open(options).result
        //    //    .then(updatedItem => this.CloseModel(updatedItem));
        //}

        OpenStarshipModel = (starship: AdminSection.ViewModels.IStarshipVM) => {
            var self = this;
            var modalInstance: ng.ui.bootstrap.IModalServiceInstance = self.modelService.open({
                templateUrl: 'starshipModal.html',
                controller: Common.Controllers.ModelController,
                bindToController: true,
                controllerAs: 'popup',
                resolve: {
                    item: () => starship // <- this will pass the same instance 
                    // of the item displayed in the table to the modal
                }
            });

            modalInstance.result.then((selectedItem: AdminSection.ViewModels.IStarshipVM) => {
                self.selectedStarship = selectedItem;
            });
        };

        GetShipsSupplyCount = () => {
            var self = this;
            self.StartProcess();

            self.starshipTravelService.GetShipsSupplyCount(self.planetDistance)
                .then(function (response: any) {
                    self.starshipModel.starships = response.data.results;
                    self.starshipModel.next = response.data.next;
                    self.starshipModel.previous = response.data.previous;
                    self.ProcessInfo.IsSucceed = true;
                    self.ProcessInfo.Message = response.data.message;
                })
                .catch(function (response: any) {
                    self.ProcessInfo.Message = response.data.message;
                })
                .finally(function () {
                    self.ProcessInfo.Loading = false;
                });
        }

        GetByUrl = (url: string) => {
            var self = this;
            self.StartProcess();
            self.starshipTravelService.GetByUrl(url, self.planetDistance)
                .then(function (response: any) {
                    self.starshipModel.starships = response.data.results;
                    self.starshipModel.next = response.data.next;
                    self.starshipModel.previous = response.data.previous;
                    self.ProcessInfo.IsSucceed = true;
                    self.ProcessInfo.Message = response.data.message;
                })
                .catch(function (response: any) {
                    self.ProcessInfo.Message = response.data.message;
                })
                .finally(function () {
                    self.ProcessInfo.Loading = false;
                });
        }

    }
    App.ModuleInitiator.GetModule("UsersSection").controller("UsersSection.Controllers.StarshipTravelController", StarshipTravelController );
} 