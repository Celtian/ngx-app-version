import { InjectionToken, Provider } from '@angular/core';
import { NgxAppVersionOptions } from './ngx-app-version.interface';

export const APP_VERSION_OPTIONS_TOKEN = new InjectionToken<NgxAppVersionOptions>('[ngxAppVersion] Options');

export const provideAppVersion = (options: NgxAppVersionOptions): Provider => {
  return {
    provide: APP_VERSION_OPTIONS_TOKEN,
    useValue: {
      version: options.version
    }
  };
};
