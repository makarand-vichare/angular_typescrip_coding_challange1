module AdminSection.Interfaces
{
    export interface IPlanetService
    {
        GetByPage(page: number): ng.IPromise<any>;
        GetByUrl(url: string): ng.IPromise<any>;
    }
}