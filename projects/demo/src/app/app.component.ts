import { Component, OnInit } from '@angular/core';
import { NgxAppVersionDirective } from 'projects/ngx-app-version/src/public-api';
import { VERSION } from '../environments/version';

type State = 'DIRECTIVE' | 'HOST_DIRECTIVE';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  hostDirectives: [NgxAppVersionDirective]
})
export class AppComponent implements OnInit {
  public title = 'ngx-app-version';
  public version = VERSION;
  public state: State;
  public code: string;

  public ngOnInit(): void {
    this.setState('DIRECTIVE');
  }

  public setState(state: State): void {
    this.state = state;
    if (this.state === 'HOST_DIRECTIVE') {
      this.code = `@Component({
          ...
          hostDirectives: [NgxAppVersionDirective]
          ...
        })
        export class AppComponent {
          ...
        }`;
    } else {
      this.code = '<div ngxAppVersion>Version will be on this div</div>';
    }
  }
}
