import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginRegisterComponent } from './pages/auth/login-register/login-register.component'
import { ForgotPasswordResetComponent } from './pages/auth/forgot-password-reset/forgot-password-reset.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginRegisterComponent
  },
  {
    path: 'forgot',
    component: ForgotPasswordResetComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
