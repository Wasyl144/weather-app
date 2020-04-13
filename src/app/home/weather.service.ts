import { Injectable } from '@angular/core';
import {WeatherModel} from './weather.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly ROOT_URL:string='http://localhost:5000/weather/';
  private currentCity = new BehaviorSubject("");
  city1:String;
  private dataSource = new BehaviorSubject<WeatherModel>({
    city_name: '',
    description: {
        conditions:'',
    },
    icon: {
      type:'',
    },
    pressure:0,
    temperature:0,
    wind_speed:0,
  });
  currentMessage = this.dataSource.asObservable();

  constructor(private http:HttpClient) { }

  changeCity(city:string){
    this.currentCity.next(city);
    this.city1=this.currentCity.getValue();
  }
  //This function assign variable dataSource as a BehaviourSubject to pass data
  getwee(){
    this.getWeather().subscribe((data:WeatherModel) => this.dataSource.next(data));
  }

  //This functio returns beahavioursubject to other compontnet
  retWea() {
    
    return this.dataSource.asObservable();
  }

  getWeather (): Observable<WeatherModel> {
    return this.http.get<WeatherModel>(this.ROOT_URL+this.city1);
    
  }


}
