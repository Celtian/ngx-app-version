import { TAILWIND_BREAKPOINTS } from '.';
import { NgxAppVersionOptionsFactory } from './ngx-app-version-options-factory';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';
import { BOOTSTRAP_BREAKPOINTS, CDK_BREAKPOINTS, DEFAULT_RESPONSIVE_SIZES, FX_LAYOUT_BREAKPOINTS } from './ngx-app-version.constants';

describe('NgxAppVersionOptionsFactory', () => {
  it('should return instance of NgxAppVersionOptionsService', () => {
    expect(NgxAppVersionOptionsFactory()).toBeInstanceOf(NgxAppVersionOptionsService);
  });

  it('should return default values if undefined', () => {
    const optionsService: NgxAppVersionOptionsService = NgxAppVersionOptionsFactory(undefined);
    expect(optionsService.size).toEqual(1);
    expect(optionsService.breakpoints).toEqual(BOOTSTRAP_BREAKPOINTS);
    expect(optionsService.responsiveSizes).toEqual(DEFAULT_RESPONSIVE_SIZES);
  });

  it('should return default values if null', () => {
    const optionsService: NgxAppVersionOptionsService = NgxAppVersionOptionsFactory(null);
    expect(optionsService.size).toEqual(1);
    expect(optionsService.breakpoints).toEqual(BOOTSTRAP_BREAKPOINTS);
    expect(optionsService.responsiveSizes).toEqual(DEFAULT_RESPONSIVE_SIZES);
  });

  it('should return size if set value', () => {
    expect(NgxAppVersionOptionsFactory({ size: 2 }).size).toEqual(2);
    expect(NgxAppVersionOptionsFactory({ size: 'xs' }).size).toEqual('xs');
    expect(NgxAppVersionOptionsFactory({ size: 'sm' }).size).toEqual('sm');
    expect(NgxAppVersionOptionsFactory({ size: 'md' }).size).toEqual('md');
    expect(NgxAppVersionOptionsFactory({ size: 'lg' }).size).toEqual('lg');
    expect(NgxAppVersionOptionsFactory({ size: 'xl' }).size).toEqual('xl');
  });

  it('should return responsiveSizes if set value', () => {
    const responsiveSizes = {
      xs: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
      sm: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
      md: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
      lg: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
      xl: { xs: 5, sm: 6, md: 7, lg: 8, xl: 9 }
    };
    expect(NgxAppVersionOptionsFactory({ responsiveSizes }).responsiveSizes).toEqual(responsiveSizes);
  });

  it('should return breakpoints if set value', () => {
    expect(NgxAppVersionOptionsFactory({ breakpoints: 'BOOTSTRAP' }).breakpoints).toEqual(BOOTSTRAP_BREAKPOINTS);
    expect(NgxAppVersionOptionsFactory({ breakpoints: 'FX_LAYOUT' }).breakpoints).toEqual(FX_LAYOUT_BREAKPOINTS);
    expect(NgxAppVersionOptionsFactory({ breakpoints: 'CDK' }).breakpoints).toEqual(CDK_BREAKPOINTS);
    expect(NgxAppVersionOptionsFactory({ breakpoints: 'TAILWIND' }).breakpoints).toEqual(TAILWIND_BREAKPOINTS);
    const breakpoints = { sm: 300, md: 400, lg: 500, xl: 600 };
    expect(NgxAppVersionOptionsFactory({ breakpoints }).breakpoints).toEqual(breakpoints);
  });
});
