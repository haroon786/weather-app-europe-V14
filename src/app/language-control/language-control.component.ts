import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateService } from '@ngx-translate/core';

export interface Item {
  name: any;
  icon: any;
}

@Component({
  selector: 'app-language-control',
  templateUrl: './language-control.component.html',
  styleUrls: ['./language-control.component.css'],
  standalone:true,
  imports:[MatSelectModule,FormsModule,CommonModule,
    MatSlideToggleModule,
    MatButtonToggleModule]
})
export class LanguageControlComponent implements OnInit {
  selectedFood2: any="";
 // selected:any;
 public options:any[] = [
    {Value2 : 'en', Text : 'English', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'},

    {Value2 : 'it', Text : 'Italia', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg'},
    {Value2 : 'tr', Text : 'Türkiye', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg'},
    {Value2 : 'de', Text : 'Österreich', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/AT.svg'},
    {Value2 : 'el', Text : 'Ελλάδα', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/GR.svg'},
    {Value2 : 'nb', Text : 'Norge', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/NO.svg'},

    // value2 are the json file name remeber
    ];
    private languageCodes: string[] = ['en', 'it', 'tr', 'de','el','nb'];
     selected:any = this.options[0];
  isChecked:boolean = true;

  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';

  public theme: string;

  constructor(@Inject(DOCUMENT) private document: Document,public translate: TranslateService) {

   // translate.addLangs( [this.options]);
    translate.setDefaultLang('en');

    this.theme = this.document.documentElement.classList.contains(LanguageControlComponent.DARK_THEME_CLASS)
    ? LanguageControlComponent.DARK_THEME_DARK : LanguageControlComponent.DARK_THEME_LIGHT;
  }

  selectTheme()
  {
    if(this.isChecked)
    {
      this.document.documentElement.classList.add(LanguageControlComponent.DARK_THEME_CLASS);
      this.theme = LanguageControlComponent.DARK_THEME_DARK;
      this.isChecked=false;
    }
    else
    {

      this.document.documentElement.classList.remove(LanguageControlComponent.DARK_THEME_CLASS);
      this.theme = LanguageControlComponent.DARK_THEME_LIGHT;
      this.isChecked=true;
    }
  }

  ngOnInit(): void {
    this.selectLanguageByCode(this.translate.getBrowserLang());
  }

  onFoodSelection2(e:any) {

    this.translate.use(this.selected.Value2);
    this.selectLanguageByCode(e.Value2);
  }
  private selectLanguageByCode(languageCode: any): void {
    this.translate.use(
      this.isLanguageCodeSupported(languageCode)
        ? languageCode
        : this.translate.getDefaultLang()
    );
  }
  private isLanguageCodeSupported(languageCode: string): boolean {
    return this.languageCodes.indexOf(languageCode) > -1;
  }


  public get todaysDatee(): Date {
    return new Date();
  }
}
