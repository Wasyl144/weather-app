import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
import {WeatherModel} from '../weather.model';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  weatherData:WeatherModel[];

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

  getData () {
    this.weatherService.getWeather().subscribe
    ((data:WeatherModel[])=> this.weatherData = data);
  }



}
