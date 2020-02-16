import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroProfileComponent} from './hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroProfileComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
