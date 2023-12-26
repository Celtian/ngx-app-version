import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAppVersion } from 'projects/ngx-app-version/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAppVersion({
      version: '1.0.0'
    })
  ]
};
