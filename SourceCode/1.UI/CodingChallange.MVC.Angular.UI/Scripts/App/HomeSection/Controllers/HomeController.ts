
module HomeSection.Controllers {
    export class HomeController extends Common.Controllers.BaseController {
        static $inject = ["HomeSection.Services.TestApiService", "$injector"];
        users: Array<AdminSection.ViewModels.IUserVM>;
        constructor(private testApiService: HomeSection.Interfaces.ITestApiService, _injectorService: ng.auto.IInjectorService) {
            super(_injectorService);
        }

        CheckApiUrl = () => {
            var self = this;
            self.StartProcess();

            self.testApiService.GetTestValuesList()
                .then(function (response: any) {
                    self.users = response.data.result;
                    self.ProcessInfo.Message = response.data.message;
                })
                .catch(function (response: any) {
                    self.ProcessInfo.Message = response.data;
                })
                .finally(function () {
                    self.ProcessInfo.Loading = false;
                });
        }
    }
    App.ModuleInitiator.GetModule("HomeSection").controller("HomeSection.Controllers.HomeController", HomeController);
} 