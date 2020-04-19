import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherModel } from '../weather.model';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  weatherData: WeatherModel = {
    city_name: '',
    description: {
      conditions: '',
    },
    icon: {
      type: '',
    },
    pressure: 0,
    temperature: 0,
    wind_speed: 0,
    cod:0,
  };
  constructor(private weatherService: WeatherService,
    private _snackBar: MatSnackBar) {

  }
  interval: any;
  ngOnInit() {
    this.getData();
  }

  getData() {

    this.weatherService.retWea().subscribe((data: WeatherModel) => this.weatherData = data)
  }

  likeFun() {
    this._snackBar.open('Thanks :)', 'Dismiss', {
      duration: 3000
    });
  }

}
