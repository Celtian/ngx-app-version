import { TestBed } from "@angular/core/testing";
import { NgxAppVersionOptionsService } from "./ngx-app-version-options.service";
import { FOR_ROOT_OPTIONS_TOKEN, NgxAppVersionModule } from "./ngx-app-version.module";


describe('NgxAppVersionModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxAppVersionModule.forRoot()]
    });
  });

  it(`should provide services`, () => {
    const options = TestBed.inject(FOR_ROOT_OPTIONS_TOKEN);
    expect(options).toBe(undefined);
  });

  it(`should provide services2`, () => {
    const optionsService = TestBed.inject(NgxAppVersionOptionsService);
    expect(optionsService).toEqual(new NgxAppVersionOptionsService());
  });
})
