export interface WeatherModel {
    city_name: string,
    description: {
        conditions:string,
    },
    pressure:number,
    temperature:number,
    wind_speed:number,
}