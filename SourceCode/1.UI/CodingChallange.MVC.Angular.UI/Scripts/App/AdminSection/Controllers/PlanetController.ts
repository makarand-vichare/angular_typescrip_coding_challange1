
module AdminSection.Controllers {
    export class PlanetController extends Common.Controllers.BaseController {
        static $inject = ["$injector", "AdminSection.Services.PlanetService"];
        constructor(_injectorService: ng.auto.IInjectorService, private planetService: AdminSection.Interfaces.IPlanetService) {
            super(_injectorService);
        }

        model = {
            planets: new Array<AdminSection.ViewModels.IPlanetVM>(),
            next: '',
            previous: ''
        };

        GetPlanets = (page: number) => {
            var self = this;
            self.StartProcess();

            self.planetService.GetByPage(page)
                .then(function (response: any) {
                    self.model.planets = self.SetRandomDistance(response.data.results);
                    self.model.next = response.data.next;
                    self.model.previous = response.data.previous;

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
            self.planetService.GetByUrl(url)
                .then(function (response: any) {
                    self.model.planets = self.SetRandomDistance(response.data.results);
                    self.model.next = response.data.next;
                    self.model.previous = response.data.previous;
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

        private SetRandomDistance = (planets: Array<AdminSection.ViewModels.IPlanetVM>): Array<AdminSection.ViewModels.IPlanetVM> => {
            planets.forEach((planet) => {
                planet.Distance = Math.floor(Math.random() * Common.AppConstants.RandomDistance * 2);
            });
            return planets;
        }

    }
    App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.PlanetController", PlanetController);
} 