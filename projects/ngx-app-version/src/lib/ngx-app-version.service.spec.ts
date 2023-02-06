import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxAppVersionModule } from './ngx-app-version.module';
import { NgxAppVersionService } from './ngx-app-version.service';

describe('NgxAppVersionService', () => {
  let service: NgxAppVersionService;
  let renderer: jasmine.SpyObj<Renderer2>;
  let element: jasmine.SpyObj<ElementRef>;

  beforeEach(() => {
    element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    renderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle', 'removeClass', 'addClass']);

    TestBed.configureTestingModule({
      imports: [NgxAppVersionModule],
      providers: [
        { provide: Renderer2, useValue: renderer },
        { provide: ElementRef, useValue: element }
      ]
    });
    service = TestBed.inject(NgxAppVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setStyle with zero lines', () => {
    service.setStyle(element, renderer, 0);
    expect(renderer.removeStyle).toHaveBeenCalled();
  });

  it('should setStyle with 1 line', () => {
    service.setStyle(element, renderer, 1);
    expect(renderer.setStyle).toHaveBeenCalled();
  });

  it('should setStyle with 2 line', () => {
    service.setStyle(element, renderer, 2);
    expect(renderer.setStyle).toHaveBeenCalled();
  });

  it('should removeClass if size argument is missing', () => {
    service.setClass(element, renderer);
    expect(renderer.removeClass).toHaveBeenCalled();
  });

  it('should addClass if argument size is present', () => {
    service.setClass(element, renderer, 'xs');
    expect(renderer.addClass).toHaveBeenCalled();
  });
});
