import { Component, OnInit } from '@angular/core';
import { eLanguages } from './enrichment-mat/enrichment-resources/shared.model';
import { LanguageService } from './services/language.service';
import { LocalStorageWebService } from './services/local-storage-web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentLanguage = this.localStorageService.getValue('language')
    ? this.localStorageService.getValue('language').toString()
    : 'he';
  constructor(
    private languageService: LanguageService,
    private localStorageService: LocalStorageWebService
  ) {}
  ngOnInit() {
    if (this.localStorageService.hasValue('language')) {
      this.currentLanguage = this.localStorageService
        .getValue('language')
        .toString();
      this.languageService.setLanguage(this.currentLanguage);
    } else {
      this.currentLanguage = eLanguages.HEBREW;
      this.languageService.setLanguage(eLanguages.HEBREW);
    }
  }
}
