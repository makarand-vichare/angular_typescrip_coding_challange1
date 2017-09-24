
module Common.Services {
    export class BaseService implements Common.Interfaces.IBaseService {
        protected logService: ng.ILogService;
        static $inject = ["$injector"];

        constructor(injectorService: ng.auto.IInjectorService) {
            this.logService = injectorService.get<ng.ILogService>("$log");
        }
    }

    App.ModuleInitiator.GetModule("Common").service("Common.Services.BaseService", BaseService);
} 