﻿module Common.Directives
{
    export interface IAntiForgeryTokenDirectiveController
    {
        GetAntiForgeryToken(): void;
    }

    export class AntiForgeryTokenDirectiveController implements IAntiForgeryTokenDirectiveController
    {
        static $inject = ["AdminSection.Services.AuthService", "$http"];
        constructor( private authService: AdminSection.Interfaces.IAuthService, private httpService: ng.IHttpService)
        {
        }

        antiForgeryToken: string = '';

        GetAntiForgeryToken() 
        {
            var self = this;
            return self.authService.GetAntiForgeryToken().then((response: any) =>
            {
                self.httpService.defaults.headers.common['XSRF-TOKEN'] = response.data.FormToken || "no request verification token";
            });
        }
    }

    function AntiForgeryToken(): ng.IDirective
    {
        return {
            replace: true,
            template: '',
            controller: AntiForgeryTokenDirectiveController,
            link: ( scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes, ctrl: IAntiForgeryTokenDirectiveController  ): void =>
            {
                ctrl.GetAntiForgeryToken();
            }
        }
    }

    App.ModuleInitiator.GetModule( "Common" ).directive( "antiForgeryToken", AntiForgeryToken );
}