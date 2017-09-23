module UsersSection.Interfaces
{
    export interface IStarshipTravelService
    {
        GetShipsSupplyCount(planetDistance: number): ng.IPromise<any>;
        GetByUrl(url: string, planetDistance: number): ng.IPromise<any>;
    }
}