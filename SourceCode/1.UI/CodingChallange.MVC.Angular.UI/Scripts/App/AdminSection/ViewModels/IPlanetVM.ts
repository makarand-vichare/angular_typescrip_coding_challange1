module AdminSection.ViewModels
{
    export class IPlanetVM extends Common.ViewModels.IBaseVM
    {
        Rotation_period: number;
        Diameter: number;
        Gravity: string;
        Population: number;
        Climate: string;
        Distance: number;
    }
}