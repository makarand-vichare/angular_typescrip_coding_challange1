
module Common
{
    export class AppConstants
    {
        static get SWAPIUrl(): string { return "https://swapi.co/api" };
        static get AuthAPIUrl(): string { return "http://localhost:8888" };

    }

    export enum HeardAboutUsList
    {
        Advert = 1,
        WordOfMouth = 2,
        Other = 3
    }

    App.ModuleInitiator.GetModule( "Common" ).constant( "Common.AppConstants", AppConstants);
}