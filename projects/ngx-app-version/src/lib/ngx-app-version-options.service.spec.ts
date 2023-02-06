import { TestBed } from '@angular/core/testing';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';
import { NgxAppVersionModule } from './ngx-app-version.module';

describe('NgxAppVersionOptionsService', () => {
  let service: NgxAppVersionOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxAppVersionModule]
    });
    service = TestBed.inject(NgxAppVersionOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
