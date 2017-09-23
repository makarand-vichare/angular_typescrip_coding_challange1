module AdminSection.Controllers
{
    export class AdminHomeController
    {
        static $inject = ["$injector"];

    }
    App.ModuleInitiator.GetModule("AdminSection").controller("AdminSection.Controllers.AdminHomeController", AdminHomeController );
} 