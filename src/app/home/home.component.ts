import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {WeatherModel} from './weather.model';
import {WeatherService} from './weather.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private weatherData:WeatherModel;

  cityForm = new FormGroup({
    city: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),]),
    })

  constructor(private weatherService:WeatherService) {
    
   }

   check() {
     console.log(this.weatherData);
   }

   onSubmit () {
    this.weatherService.changeCity (this.cityForm.value.city);
    this.weatherService.getWeather().subscribe((data:WeatherModel)=> {
      this.weatherService.getwee();
      this.weatherData=data;
    })
    
    this.show=true;
  }
  show=false;

  ngOnInit(): void {
    
  }

}
