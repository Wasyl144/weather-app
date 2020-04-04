import { Injectable } from '@angular/core';
import {WeatherModel} from './weather.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly ROOT_URL:string='http://localhost:5000/weather/';
  private currentCity = new BehaviorSubject("");
  city1:String;

  constructor(private http:HttpClient) { }

  changeCity(city:string){
    this.currentCity.next(city);
    this.city1=this.currentCity.getValue();
  }

  getWeather () {
    return this.http.get(this.ROOT_URL+this.city1);
  }
}
