import { NgxAppVersionOptions } from './ngx-app-version-options.interface';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';

export const NgxAppVersionOptionsFactory = (options?: NgxAppVersionOptions): NgxAppVersionOptionsService => {
  const ngxAppVersionOptionsService = new NgxAppVersionOptionsService();

  if (options) {
    if (options.version) {
      ngxAppVersionOptionsService.version = options.version;
    }
  }

  return ngxAppVersionOptionsService;
};
