module AdminSection.Interfaces
{
    export interface IStarshipService
    {
        GetByPage(page: number): ng.IPromise<any>;
        GetByUrl(url: string): ng.IPromise<any>;
        GetAll(): ng.IPromise<any>;
    }
}