import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAppVersion } from 'ngx-app-version';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppVersion({
      version: '1.0.0'
    })
  ]
};
