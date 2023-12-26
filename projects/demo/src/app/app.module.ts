import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAppVersionModule } from 'projects/ngx-app-version/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxAppVersionModule.forRoot({
      version: '1.0.0'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
