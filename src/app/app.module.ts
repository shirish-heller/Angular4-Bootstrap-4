import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { app_routing } from './app.routing';
import { HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, app_routing.routes, HttpModule ],
  declarations: [ AppComponent, app_routing.components ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }