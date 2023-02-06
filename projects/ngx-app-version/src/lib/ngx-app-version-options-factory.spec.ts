import { NgxAppVersionOptionsFactory } from './ngx-app-version-options-factory';
import { NgxAppVersionOptionsService } from './ngx-app-version-options.service';

describe('NgxAppVersionOptionsFactory', () => {
  it('should return instance of NgxAppVersionOptionsService', () => {
    expect(NgxAppVersionOptionsFactory()).toBeInstanceOf(NgxAppVersionOptionsService);
  });
});
