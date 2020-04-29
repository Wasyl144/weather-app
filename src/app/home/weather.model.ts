export interface WeatherModel {
    city_name: string,
    description: {
        conditions:string,
    },
    icon: {
        type:string,
    },
    pressure:number,
    temperature:number,
    wind_speed:number,
    cod:number,
}