
module AdminSection.Controllers {
    export class StarshipController extends Common.Controllers.BaseController {
        static $inject = ["$injector", "toastr", "AdminSection.Services.StarshipService"];
        constructor(_injectorService: ng.auto.IInjectorService, private toastrService: ng.toastr.IToastrService, private starshipService: AdminSection.Interfaces.IStarshipService) {
            super(_injectorService);
        }

        model = {
            starships: new Array<AdminSection.ViewModels.IStarshipVM>(),
            next: '',
            previous: ''
        };

        GetStarShips = (page: number) => {
            var self = this;
            self.StartProcess();

            self.starshipService.GetByPage(page)
                .then(function (response: any) {
                    self.model.starships = response.data.results;
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
            self.starshipService.GetByUrl(url)
                .then(function (response: any) {
                    self.model.starships = response.data.results;
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

        InfoMessage = () => {
            var self = this;
            self.toastrService.info('App Demo', 'This feature is not yet implmented.');
        }
    }
    App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.StarshipController", StarshipController);
} 