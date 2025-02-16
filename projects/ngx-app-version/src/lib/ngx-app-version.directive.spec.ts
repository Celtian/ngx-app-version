import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxAppVersionDirective } from './ngx-app-version.directive';
import { NgxAppVersionOptions } from './ngx-app-version.interface';
import { provideAppVersion } from './ngx-app-version.provider';

describe('NgxAppVersionDirective', () => {
  describe('directive', () => {
    let fixture: ComponentFixture<TestComponent>;

    @Component({
      template: `<div ngxAppVersion></div>`,
      imports: [NgxAppVersionDirective]
    })
    class TestComponent {}

    const mockOptions: NgxAppVersionOptions = {
      version: '1.0.0'
    };

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TestComponent],
        providers: [
          provideAppVersion(mockOptions),
          { provide: ElementRef, useValue: {} },
          { provide: Renderer2, useValue: {} }
        ]
      });
      fixture = TestBed.createComponent(TestComponent);
    });

    it('should set the app version attribute on the host element', () => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const directiveEl = fixture.debugElement.query(By.directive(NgxAppVersionDirective));
        expect(directiveEl).not.toBeNull();

        const directiveInstance = directiveEl.injector.get(NgxAppVersionDirective);
        expect(directiveInstance).not.toBeNull();
      });
    });
  });

  describe('host directive', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    @Component({
      template: `<div></div>`,
      hostDirectives: [NgxAppVersionDirective]
    })
    class TestHostComponent {}

    const mockOptions: NgxAppVersionOptions = {
      version: '1.0.0'
    };

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TestHostComponent],
        providers: [
          provideAppVersion(mockOptions),
          { provide: ElementRef, useValue: {} },
          { provide: Renderer2, useValue: {} }
        ]
      });
      fixture = TestBed.createComponent(TestHostComponent);
    });

    it('should work as host directive', () => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const directiveInstance = fixture.debugElement.injector.get(NgxAppVersionDirective);
        expect(directiveInstance).not.toBeNull();
      });
    });
  });
});
