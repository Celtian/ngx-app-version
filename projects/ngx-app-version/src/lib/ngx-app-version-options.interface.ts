export interface NgxAppVersionBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface NgxAppVersionResponsiveSize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type NgxAppVersionResponsiveSizeOrNumber = number | NgxAppVersionResponsiveSize;

export type NgxAppVersionSizesOnlyResponsive = keyof NgxAppVersionResponsiveSize;

export type NgxAppVersionSizes = number | NgxAppVersionSizesOnlyResponsive;

export interface NgxAppVersionStyles {
  xs: NgxAppVersionStylesBreakpointData;
  sm: NgxAppVersionStylesBreakpointData;
  md: NgxAppVersionStylesBreakpointData;
  lg: NgxAppVersionStylesBreakpointData;
  xl: NgxAppVersionStylesBreakpointData;
}

export interface NgxAppVersionStylesBreakpointData {
  xs: NgxAppVersionStylesSizeAndBreakpoint;
  sm: NgxAppVersionStylesSizeAndBreakpoint;
  md: NgxAppVersionStylesSizeAndBreakpoint;
  lg: NgxAppVersionStylesSizeAndBreakpoint;
  xl: NgxAppVersionStylesSizeAndBreakpoint;
}

export interface NgxAppVersionStylesSizeAndBreakpoint {
  size: number;
  breakpoint?: number;
}

export interface NgxAppVersionResponsiveSizes {
  xs: NgxAppVersionResponsiveSize;
  sm: NgxAppVersionResponsiveSize;
  md: NgxAppVersionResponsiveSize;
  lg: NgxAppVersionResponsiveSize;
  xl: NgxAppVersionResponsiveSize;
}

export interface NgxAppVersionOptionsResponsiveSizes {
  xs: NgxAppVersionResponsiveSizeOrNumber;
  sm: NgxAppVersionResponsiveSizeOrNumber;
  md: NgxAppVersionResponsiveSizeOrNumber;
  lg: NgxAppVersionResponsiveSizeOrNumber;
  xl: NgxAppVersionResponsiveSizeOrNumber;
}

export type NgxAppVersionPredefinedBreakpoints = 'BOOTSTRAP' | 'FX_LAYOUT' | 'CDK' | 'TAILWIND';

export type NgxAppVersionBreakpointsOrPredefinedBreakpoints = NgxAppVersionBreakpoints | NgxAppVersionPredefinedBreakpoints;

export interface NgxAppVersionOptions {
  breakpoints?: NgxAppVersionBreakpointsOrPredefinedBreakpoints;
  size?: NgxAppVersionSizes;
  responsiveSizes?: NgxAppVersionOptionsResponsiveSizes;
}

export interface NgxAppVersionEventTruncate {
  truncated: boolean;
  size: NgxAppVersionSizes;
  truncateDisabled: boolean;
  offsetHeight: any;
  scrollHeight: any;
}
