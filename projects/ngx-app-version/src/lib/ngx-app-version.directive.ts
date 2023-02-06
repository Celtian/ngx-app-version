import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { NgxAppVersionEventTruncate, NgxAppVersionSizes, NgxAppVersionSizesOnlyResponsive } from './ngx-app-version-options.interface';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';
import { NgxAppVersionService } from './ngx-app-version.service';
import { coerceNgxAppVersionSizes } from './ngx-app-version.utils';

/**
 * @returns multiline truncate
 */
@Directive({
  selector: '[ngxAppVersion]'
})
export class NgxAppVersionDirective implements OnInit {
  @Input('size') public set setLines(value: NgxAppVersionSizes) {
    const v = coerceNgxAppVersionSizes(value);
    this.size = v ? v : this.options.size;
    this.truncate();
    this.detectChanges();
  }
  public size: NgxAppVersionSizes = this.options.size;

  @Input('truncateDisabled') public set setTruncate(value: boolean) {
    this.truncateDisabled = value;
    this.truncate();
    this.detectChanges();
  }
  public truncateDisabled = false;

  @Output() public truncateChange = new EventEmitter<NgxAppVersionEventTruncate>();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private options: NgxAppVersionOptionsService,
    private service: NgxAppVersionService
  ) { }

  public ngOnInit(): void {
    this.truncate();
    this.detectChanges();
  }

  private truncate(): void {
    if (this.element) {
      if (this.size) {
        if (typeof this.size === 'number') {
          this.service.setStyle(this.element, this.renderer, this.truncateDisabled ? 0 : Number(this.size));
        } else {
          this.service.setClass(
            this.element,
            this.renderer,
            this.truncateDisabled ? undefined : (this.size as NgxAppVersionSizesOnlyResponsive)
          );
        }
      }
    }
  }

  private detectChanges(): void {
    setTimeout(() => {
      if (this.element) {
        const { offsetHeight, scrollHeight } = this.element.nativeElement;
        this.truncateChange.emit({
          truncated: offsetHeight < scrollHeight,
          size: this.size,
          truncateDisabled: this.truncateDisabled,
          offsetHeight,
          scrollHeight
        });
      }
    }, 100);
  }
}
