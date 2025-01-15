import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './pages/auth/login-register/login-register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AccountComponent } from './pages/account/account.component';
import {CommonModule, NgClass} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ForgotPasswordResetComponent} from './pages/auth/forgot-password-reset/forgot-password-reset.component';
import { HomeComponent } from './pages/home/home.component';
import {PaginatorModule} from 'primeng/paginator';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginRegisterComponent,
    ForgotPasswordResetComponent,
    HomeComponent
  ],
  imports: [
    PaginatorModule,
    SharedModule,
    TableModule,
    CommonModule,
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
