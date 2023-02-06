import { Injectable } from '@angular/core';
import { NgxAppVersionBreakpoints, NgxAppVersionResponsiveSizes, NgxAppVersionSizes } from './ngx-app-version-options.interface';
import { DEFAULT_BREAKPOINTS, DEFAULT_RESPONSIVE_SIZES } from './ngx-app-version.constants';

@Injectable()
export class NgxAppVersionOptionsService {
  /**
   * @returns breakpoints - can be custom or predefined
   */
  public breakpoints: NgxAppVersionBreakpoints = DEFAULT_BREAKPOINTS;
  /**
   * @returns number of truncated lines globaly
   */
  public size: NgxAppVersionSizes = 1;
  /**
   * @returns aliases with defined number of lines for each breakpoint
   */
  public responsiveSizes: NgxAppVersionResponsiveSizes = DEFAULT_RESPONSIVE_SIZES;
}
