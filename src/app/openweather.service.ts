import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { forkJoin, Observable, of, pipe } from 'rxjs';
import { count, filter, first, map, pluck, share, shareReplay, skip, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class OpenweatherService {
  response: any;
  header:any;
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return forkJoin(
      // as of RxJS 6.5+ we can use a dictionary of sources
      {

        Italy: this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Italy&appid=53f8b925a7782d90827265e6495b1a27'
        ),
        Turkey: this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Turkey&appid=53f8b925a7782d90827265e6495b1a27'
        ),
        Austria: this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Austria&appid=53f8b925a7782d90827265e6495b1a27'
        ),
        Greece: this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Greece&appid=53f8b925a7782d90827265e6495b1a27'
        ),
        Norway: this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Norway&appid=53f8b925a7782d90827265e6495b1a27'
        ),

      }
    )
  }
  foreCastData(countryName:any): Observable<any>
   {

      return this.http.get<data>(
        `https://api.openweathermap.org/data/2.5/forecast?q=${countryName}&appid=53f8b925a7782d90827265e6495b1a27`
      ).pipe(
        map((e: data) => {

          return e.list.filter(e=>e.dt_txt.includes("21:00:00"))
        })
      )

   }

}


export interface data {
  cod: string;
  message: 0,
  cnt: number;
  list: {
    clouds: {
      all: number
    }
    dt: number
    dt_txt: string
    main: {
      feels_like: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      temp: number;
      temp_kf: number;
      temp_max: number;
      temp_min: number;
    }
    pop: number
    rain: any
    sys: {
      pod: string;
    }
    visibility: number
    weather: {
      description: string;
      icon: string;
      id: number
      main: string
    }[]
    wind: {
      deg: number;
      gust: number;
      speed: number;
    }
  }[]
}


