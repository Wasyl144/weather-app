import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {WeatherModel} from '../weather.model';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  weatherData:WeatherModel = {
    city_name: '',
    description: {
        conditions:'',
    },
    pressure:0,
    temperature:0,
    wind_speed:0,
  };

  constructor(private weatherService:WeatherService) { 
    
  }
  interval:any;
  ngOnInit() {
    this.getData();
    
}

  getData (){
    
    this.weatherService.retWea().subscribe((data:WeatherModel)=>this.weatherData=data);
  }



}
