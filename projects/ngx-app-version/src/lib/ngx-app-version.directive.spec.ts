import { Component, ElementRef, NO_ERRORS_SCHEMA, Renderer2, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxAppVersionEventTruncate } from './ngx-app-version-options.interface';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';
import { NgxAppVersionDirective } from './ngx-app-version.directive';
import { NgxAppVersionService } from './ngx-app-version.service';

const TEXT = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque porta. Vivamus ac leo pretium faucibus. Maecenas sollicitudin. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Morbi scelerisque luctus velit. Nam sed tellus id magna elementum tincidunt. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Integer lacinia. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.';

describe('NgxAppVersionDirective', () => {

  describe('Example with size number', () => {
    let renderer: jasmine.SpyObj<Renderer2>;
    let element: jasmine.SpyObj<ElementRef>;
    let options: jasmine.SpyObj<NgxAppVersionOptionsService>;
    let service: jasmine.SpyObj<NgxAppVersionService>;
    let fixture: ComponentFixture<TestDirectiveComponent>;

    @Component({
      template: '<p ngxAppVersion [size]="2" [truncateDisabled]="false" (truncateChange)="onTruncate($event)">{{ text }}</p>'
    })
    class TestDirectiveComponent {
      public text = TEXT;
      @ViewChild(NgxAppVersionDirective) public directive: NgxAppVersionDirective;
      public onTruncate(event: NgxAppVersionEventTruncate): void {
        this.event = event;
      }
      public event: NgxAppVersionEventTruncate;
    }

    beforeEach(() => {
      options = jasmine.createSpyObj('NgxAppVersionOptionsService', ['size']);
      element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
      service = jasmine.createSpyObj('NgxAppVersionService', ['setStyle', 'setClass']);
      renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);

      fixture = TestBed.configureTestingModule({
        declarations: [TestDirectiveComponent, NgxAppVersionDirective],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: Renderer2, useValue: renderer },
          { provide: ElementRef, useValue: element },
          { provide: NgxAppVersionService, useValue: service },
          { provide: NgxAppVersionOptionsService, useValue: options },
        ]
      }).createComponent(TestDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxAppVersionDirective(element, renderer, options, service);
      expect(directive).toBeTruthy();
    });

    it('should have to be called "service.setStyle"', () => {
      expect(service.setStyle).toHaveBeenCalled();
    });

    it('should emit change', fakeAsync(() => {
      tick(500);
      jasmine.clock().tick(1000);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const component = fixture.componentInstance;
        spyOn(component.directive.truncateChange, 'emit');
        fixture.detectChanges();
        expect(component.directive.truncateChange.emit).toHaveBeenCalled();
      })
    }))
  });


  describe('Example with size enum', () => {
    let renderer: jasmine.SpyObj<Renderer2>;
    let element: jasmine.SpyObj<ElementRef>;
    let options: jasmine.SpyObj<NgxAppVersionOptionsService>;
    let service: jasmine.SpyObj<NgxAppVersionService>;
    let fixture: ComponentFixture<TestEnumDirectiveComponent>;

    @Component({
      template: '<p ngxAppVersion size="xs" [truncateDisabled]="false">{{ text }}</p>'
    })
    class TestEnumDirectiveComponent {
      public text = TEXT;
      @ViewChild(NgxAppVersionDirective) public directive: NgxAppVersionDirective;
    }

    beforeEach(() => {
      options = jasmine.createSpyObj('NgxAppVersionOptionsService', ['size']);
      element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
      service = jasmine.createSpyObj('NgxAppVersionService', ['setStyle', 'setClass']);
      renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);

      fixture = TestBed.configureTestingModule({
        declarations: [TestEnumDirectiveComponent, NgxAppVersionDirective],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: Renderer2, useValue: renderer },
          { provide: ElementRef, useValue: element },
          { provide: NgxAppVersionService, useValue: service },
          { provide: NgxAppVersionOptionsService, useValue: options },
        ]
      }).createComponent(TestEnumDirectiveComponent);

      fixture.detectChanges();
    });

    it('should create an instance', () => {
      const directive = new NgxAppVersionDirective(element, renderer, options, service);
      expect(directive).toBeTruthy();
    });

    it('should have to be called "service.setClass"', () => {
      expect(service.setClass).toHaveBeenCalled();
    });
  });
})
