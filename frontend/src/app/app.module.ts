import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
import { LibraryComponent } from './library/library.component';
import { SideNavigatorComponent } from './side-navigator/side-navigator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbroadComponent,
    LibraryComponent,
    SideNavigatorComponent,
    ToolbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
