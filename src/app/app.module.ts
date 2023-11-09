import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CountryCardComponent } from './country-card';

@NgModule({
  declarations: [
    CountryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
