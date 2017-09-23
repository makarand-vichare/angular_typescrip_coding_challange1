
module UsersSection.Controllers
{
    export class StarshipTravelController extends Common.Controllers.BaseController
    {
        static $inject = ["$injector", "UsersSection.Services.StarshipTravelService", "AdminSection.Services.PlanetService"];
        constructor(_injectorService: ng.auto.IInjectorService, private starshipTravelService: UsersSection.Interfaces.IStarshipTravelService, private planetService: AdminSection.Interfaces.IPlanetService )
        {
            super( _injectorService );
        }

        starshipModel = {
            starships: new Array<AdminSection.ViewModels.IStarshipVM>(),
            next: '',
            previous: ''
        };

        planetDistance: number = 1000000;


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