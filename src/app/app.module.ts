import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './pages/auth/login-register/login-register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AccountComponent } from './pages/account/account.component';
import {NgClass} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ForgotPasswordResetComponent} from './pages/auth/forgot-password-reset/forgot-password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginRegisterComponent,
    ForgotPasswordResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
