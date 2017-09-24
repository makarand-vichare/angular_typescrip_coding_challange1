
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
        //onlyNumbers :string = "/([1-9][0-9]*||[0]*[1-9]+[0-9]*)/";
        planetDistance: number = Common.AppConstants.RandomDistance;
        invalidDistance: boolean= false;
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
                //self.selectedStarship = selectedItem;
            });
        };

        OpenPlanetModel = (planet: AdminSection.ViewModels.IPlanetVM) => {
            var self = this;
            var modalInstance: ng.ui.bootstrap.IModalServiceInstance = self.modelService.open({
                templateUrl: 'planetModal.html',
                controller: Common.Controllers.ModelController,
                bindToController: true,
                controllerAs: 'popup',
                resolve: {
                    item: () => planet // <- this will pass the same instance 
                    // of the item displayed in the table to the modal
                }
            });
        };

        GetShipsSupplyCount = () => {
            var self = this;
            self.invalidDistance = false;

            self.StartProcess();
            if (self.planetDistance == null || self.planetDistance <= 0) {
                self.invalidDistance = true;
                return;
            }

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

        GetReachablePlanets = (planets: Array<AdminSection.ViewModels.IPlanetVM>): Array<AdminSection.ViewModels.IPlanetVM> => {
            var self = this;
            var filtered = planets.filter((planet) =>{
                return planet.Distance < self.planetDistance;
            });
            return filtered;
        }

    }
    App.ModuleInitiator.GetModule("UsersSection").controller("UsersSection.Controllers.StarshipTravelController", StarshipTravelController );
} 