import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { OpenweatherService } from './app/openweather.service';

import { environment } from './environments/environment';

import localeDe from '@angular/common/locales/de'; //german
import localeEn from '@angular/common/locales/en'; //english
import localeTr from '@angular/common/locales/tr'; //turkish
import localeNb from '@angular/common/locales/nb'; //norway
import localeEl from '@angular/common/locales/el'; //greece
import localeIt from '@angular/common/locales/it'; //italiy


registerLocaleData(localeEn);
registerLocaleData(localeEl);
registerLocaleData(localeIt);

registerLocaleData(localeDe);
registerLocaleData(localeTr);
registerLocaleData(localeNb);

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,
  {
    providers:[


      importProvidersFrom(RouterModule.forRoot(routes),TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
        }
      }),BrowserAnimationsModule,HttpClientModule)
    ]
  })

  export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
