import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteComponent } from './white/white.component';
import { BlackComponent } from './black/black.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteComponent,
    BlackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
