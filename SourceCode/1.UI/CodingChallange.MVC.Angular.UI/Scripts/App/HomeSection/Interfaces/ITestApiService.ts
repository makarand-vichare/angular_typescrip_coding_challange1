module HomeSection.Interfaces
{
    export interface ITestApiService
    {
        GetTestValuesList(): ng.IPromise<any>;
    }
}