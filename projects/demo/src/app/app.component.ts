import { Component, computed, signal } from '@angular/core';
import { NgxAppVersionDirective } from '../../../ngx-app-version/src/public-api';
import { VERSION } from '../environments/version';

type State = 'DIRECTIVE' | 'HOST_DIRECTIVE';

@Component({
  selector: 'app-root',
  imports: [NgxAppVersionDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  hostDirectives: [NgxAppVersionDirective]
})
export class AppComponent {
  public title = 'ngx-app-version';
  public version = VERSION;
  public state = signal<State>('DIRECTIVE');
  public code = computed(() => {
    const state = this.state();
    if (state === 'DIRECTIVE') {
      return '<div ngxAppVersion>Version will be on this div</div>';
    } else {
      return `@Component({
        ...
        hostDirectives: [NgxAppVersionDirective]
        ...
      })
      export class AppComponent {
        ...
      }`;
    }
  });

  public setState(state: State): void {
    this.state.set(state);
  }
}
