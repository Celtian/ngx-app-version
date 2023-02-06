import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';
import { NgxAppVersionDirective } from './ngx-app-version.directive';

const TEXT = 'Lorem ipsum dolor sit amet';

describe('NgxAppVersionDirective', () => {

  describe('Example with directive', () => {
    let renderer: jasmine.SpyObj<Renderer2>;
    let element: jasmine.SpyObj<ElementRef>;
    let options: jasmine.SpyObj<NgxAppVersionOptionsService>;

    @Component({
      template: '<div ngxAppVersion>{{ text }}</div>'
    })
    class TestDirectiveComponent {
      public text = TEXT;
      @ViewChild(NgxAppVersionDirective) public directive: NgxAppVersionDirective;
    }

    beforeEach(() => {
      options = jasmine.createSpyObj('NgxAppVersionOptionsService', ['version']);
      element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
      renderer = jasmine.createSpyObj('Renderer2', ['setAttribute']);
    });

    it('should create an instance', () => {
      const directive = new NgxAppVersionDirective(element, renderer, options);
      expect(directive).toBeTruthy();
    });
  });


  describe('Example host directive', () => {
    let renderer: jasmine.SpyObj<Renderer2>;
    let element: jasmine.SpyObj<ElementRef>;
    let options: jasmine.SpyObj<NgxAppVersionOptionsService>;

    @Component({
      template: '<p>{{ text }}</p>',
      hostDirectives: [NgxAppVersionDirective]
    })
    class TestHostDirectiveComponent {
      public text = TEXT;
      @ViewChild(NgxAppVersionDirective) public directive: NgxAppVersionDirective;
    }

    beforeEach(() => {
      options = jasmine.createSpyObj('NgxAppVersionOptionsService', ['version']);
      element = jasmine.createSpyObj('ElementRef', ['nativeElement']);
      renderer = jasmine.createSpyObj('Renderer2', ['setAttribute']);
    });

    it('should create an instance', () => {
      const directive = new NgxAppVersionDirective(element, renderer, options);
      expect(directive).toBeTruthy();
    });
  });
})
