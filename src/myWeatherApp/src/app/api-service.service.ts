import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  urlWeatherApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlWeatherApi = 'https://fcc-weather-api.glitch.me/api/current?lat={latitude}&lon={longitude}';
  }

  getWeatherForecast(latitude: any, longitude: any): Observable<any> {
    return this.httpClient.get(this.urlWeatherApi.replace('{latitude}', latitude).replace('{longitude}', longitude));

  }
}
