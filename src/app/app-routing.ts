import { Routes } from '@angular/router';
import { OpenweatherService } from './openweather.service';
import { WeatherLayoutComponent } from './weather-layout/weather-layout.component';

export const routes: Routes = [
  {path:'',component:WeatherLayoutComponent,

  providers:[OpenweatherService]
}
];



