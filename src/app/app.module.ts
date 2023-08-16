import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './scenes/home/home.component';
import { AddComponent } from './components/add/add.component';
import { AlertErrComponent } from './components/alert-err/alert-err.component';

import { MatDialogModule, } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddComponent,
    AlertErrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [AlertErrComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
