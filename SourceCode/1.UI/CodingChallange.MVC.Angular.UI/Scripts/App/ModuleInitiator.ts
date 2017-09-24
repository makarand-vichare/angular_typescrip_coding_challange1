module App
{
    export class ModuleInitiator
    {
        static modulesList = [
            { name: 'App', dependencies: Array<string>() },
            { name: 'Common', dependencies: Array<string>("ui.bootstrap") },
            { name: 'AdminSection', dependencies: Array<string>("toastr", "ngRoute", "Common", "LocalStorageModule", "angular-loading-bar", "ngMessages") },
            { name: 'HomeSection', dependencies: Array<string>("ngRoute", "Common", "LocalStorageModule","AdminSection", "angular-loading-bar", "ngMessages"  ) },
            { name: 'UsersSection', dependencies: Array<string>("ui.bootstrap", "ngRoute", "Common", "LocalStorageModule", "AdminSection", "angular-loading-bar", "ngMessages") },
        ];

        static GetModule( moduleName: string ): ng.IModule
        {
            try
            {
               return angular.module( moduleName );
            } catch (error)
            {
                var dependencies = this.modulesList.filter( o => o.name == moduleName ).shift().dependencies;
                return angular.module( moduleName, dependencies );
            }
        };
    }

    App.ModuleInitiator.GetModule("App").service( "App.ModuleInitiator", ModuleInitiator );
}