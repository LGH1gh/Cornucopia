import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';



import { AppComponent } from './app.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { LibraryComponent } from './library/library.component';
import { SideNavigatorComponent } from './side-navigator/side-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbroadComponent,
    LibraryComponent,
    SideNavigatorComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
