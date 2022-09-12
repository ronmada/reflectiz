import { APP_INITIALIZER, Injector, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EnrichmentMatComponent } from './enrichment-mat/enrichment-mat.component';
import { IframeComponent } from './enrichment-mat/render-resource/iframe/iframe.component';
import { ImageComponent } from './enrichment-mat/render-resource/image/image.component';
import { SafePipe } from './pipes/safe-pipe.pipe';
import { LOCATION_INITIALIZED } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    'assets/i18n/',
    '.json?cacheBuster=' + new Date().getTime()
  );
}
@NgModule({
  declarations: [
    AppComponent,
    EnrichmentMatComponent,
    IframeComponent,
    ImageComponent,
    SafePipe,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [TranslateService],
      useFactory: (translateService: TranslateService) =>
        translateService.getDefaultLang(),
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function appInitializerFactory(
  translate: TranslateService,
  injector: Injector
) {
  return () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      );
      locationInitialized.then(() => {
        let langToSet: string;
        const currentLang = (localStorage.getItem('language') as string)
          ? localStorage.getItem('language')
          : 'he';
        if (currentLang && currentLang === '') {
          langToSet = 'he';
        } else {
          langToSet = currentLang?.replace(/['"]+/g, '') ? 'he' : 'en';
        }
        translate.setDefaultLang(langToSet);
        translate.use(langToSet).subscribe(
          () => {
            // tslint:disable-next-line:no-console
            console.info(`Successfully initialized '${langToSet}' language.'`);
          },
          (err) => {
            console.error(
              `Problem with '${langToSet}' language initialization.'`
            );
          },
          () => {
            resolve(null);
          }
        );
      });
    });
}
