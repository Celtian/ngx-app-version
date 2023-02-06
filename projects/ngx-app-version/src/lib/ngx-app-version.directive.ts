import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';

/**
 * @returns app version
 */
@Directive({
  selector: '[ngxAppVersion]',
  standalone: true
})
export class NgxAppVersionDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private options: NgxAppVersionOptionsService
  ) {
    this.renderer.setAttribute(this.element.nativeElement, 'app-version', this.options.version);
  }
}
