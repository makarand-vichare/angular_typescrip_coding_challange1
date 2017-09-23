module AdminSection.ViewModels
{
    export class IStarshipVM extends Common.ViewModels.IBaseVM
    {
        model: string;
        crew: number;
        passengers: number;
        cargo_capacity: number;
        consumables: string;
        MGLT: string;
        hyperdrive_rating: string;
        max_atmosphering_speed: string;
        starship_class: string;
    }
}