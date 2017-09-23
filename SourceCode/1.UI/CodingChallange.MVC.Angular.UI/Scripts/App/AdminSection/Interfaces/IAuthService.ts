module AdminSection.Interfaces
{
    export interface IAuthService
    {
        Login(loginData: AdminSection.ViewModels.ILoginVM ) : ng.IPromise<any>;
        LogOut(): void;
        GetAuthData(): void;
        GetAntiForgeryToken(): ng.IPromise<any>;
        authVM: AdminSection.ViewModels.IAuthenticationVM;
    }
}