import { NgxAppVersionOptions } from './ngx-app-version-options.interface';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';
import { normalizeAllResponsiveSizes, selectBreakpoints } from './ngx-app-version.utils';

export const NgxAppVersionOptionsFactory = (options?: NgxAppVersionOptions): NgxAppVersionOptionsService => {
  const ngxAppVersionOptionsService = new NgxAppVersionOptionsService();

  if (options) {
    if (options.size) {
      ngxAppVersionOptionsService.size = options.size;
    }
    if (options.responsiveSizes) {
      ngxAppVersionOptionsService.responsiveSizes = normalizeAllResponsiveSizes(options.responsiveSizes);
    }
    if (options.breakpoints) {
      ngxAppVersionOptionsService.breakpoints = selectBreakpoints(options.breakpoints);
    }
  }

  return ngxAppVersionOptionsService;
};
