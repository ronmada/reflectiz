import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { eLanguages } from '../enrichment-mat/enrichment-resources/shared.model';
import { LocalStorageWebService } from './local-storage-web.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private language = new BehaviorSubject<eLanguages>(eLanguages.HEBREW);

  constructor(
    private localStorageService: LocalStorageWebService,
    private trnslateService: TranslateService
  ) {}
  getLanguage() {
    return this.language.getValue();
  }
  setLanguage(language: eLanguages): void {
    this.localStorageService.saveValue('language', language);
    this.trnslateService.use(language).subscribe(() => {
      this.loadStyle(language);
      this.language.next(language);
    });
  }

  loadStyle(language: string) {
    const existingLink: HTMLLinkElement = document.getElementById(
      'languageStyle'
    ) as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = `assets/css/styles-${language}.css`;
      return;
    }
    const head = document.getElementsByTagName('head')[0];
    const stylesheet = document.createElement('link');
    stylesheet.type = 'text/css';
    stylesheet.id = 'languageStyle';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = `assets/css/styles-${language}.css`;

    head.appendChild(stylesheet);
  }
}
