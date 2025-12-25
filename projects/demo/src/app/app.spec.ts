import { TestBed } from '@angular/core/testing';
import { NgxAppVersionOptions, provideAppVersion } from 'ngx-app-version';
import { App } from './app';

describe('App', () => {
  const mockOptions: NgxAppVersionOptions = {
    version: '1.0.0'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideAppVersion(mockOptions)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelector('.github-logo') as HTMLAnchorElement | null;
    expect(anchor?.href).toContain('https://github.com/celtian/ngx-app-version');
  });
});
