import { Directive, ElementRef, OnInit, Renderer2, inject } from '@angular/core';
import { APP_VERSION_OPTIONS_TOKEN } from './ngx-app-version.provider';

/**
 * @returns app version
 */
@Directive({
  selector: '[ngxAppVersion]',
  standalone: true
})
export class NgxAppVersionDirective implements OnInit {
  private options = inject(APP_VERSION_OPTIONS_TOKEN);
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);

  public ngOnInit(): void {
    this.renderer.setAttribute(this.element.nativeElement, 'app-version', this.options.version);
  }
}
