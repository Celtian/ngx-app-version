import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { NgxAppVersionOptionsFactory } from './ngx-app-version-options-factory';
import { NgxAppVersionOptions } from './ngx-app-version-options.interface';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';
import { NgxAppVersionDirective } from './ngx-app-version.directive';

export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<NgxAppVersionOptions>(
  'forRoot() NgxAppVersionOptionsService configuration.'
);

@NgModule({
  imports: [NgxAppVersionDirective],
  exports: [NgxAppVersionDirective],
  providers: [NgxAppVersionOptionsService]
})
export class NgxAppVersionModule {
  public static forRoot(options?: NgxAppVersionOptions): ModuleWithProviders<NgxAppVersionModule> {
    return {
      ngModule: NgxAppVersionModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: NgxAppVersionOptionsService,
          useFactory: NgxAppVersionOptionsFactory,
          deps: [FOR_ROOT_OPTIONS_TOKEN]
        }
      ]
    };
  }
}
