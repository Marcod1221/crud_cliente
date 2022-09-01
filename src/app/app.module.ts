import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './clients/index/index.component';
import { ViewComponent } from './clients/view/view.component';
import { CreateComponent } from './clients/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { clientModule } from './clients/clients.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    clientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
