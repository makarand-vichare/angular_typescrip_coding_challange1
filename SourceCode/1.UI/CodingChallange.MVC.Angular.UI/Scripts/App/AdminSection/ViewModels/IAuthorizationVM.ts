module AdminSection.ViewModels
{
    export class IAuthorizationVM extends Common.ViewModels.IBaseVM
    {
        Id: any;
        Token: string;
        UserName: string;
        Role: string;
    }
}