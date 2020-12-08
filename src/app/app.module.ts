import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivreComponent } from './books/livre/livre.component';
import { LeslivresComponent } from './books/leslivres/leslivres.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    LeslivresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
