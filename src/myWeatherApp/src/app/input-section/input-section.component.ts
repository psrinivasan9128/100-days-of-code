import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.css']
})
export class InputSectionComponent implements OnInit {

  constructor(private apiservice: ApiServiceService) { }

  coordinates: any;
  forecast: any;

  weatherSubscription: Subscription;

  ngOnInit() {
    this.getLocation();

  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position !== undefined) {
          this.coordinates = position.coords;
        }
      });
    }
  }

  showWeatherForecast() {
    this.apiservice.getWeatherForecast(this.coordinates.latitude, this.coordinates.longitude).
      subscribe((item) => {
        debugger;
        this.forecast = item;
      });
  }

}
