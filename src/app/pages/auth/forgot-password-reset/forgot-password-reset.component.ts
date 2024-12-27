import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Auth} from '../data-type/auth-data';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './forgot-password-reset.component.html',
  styleUrls: ['./forgot-password-reset.component.scss'] // Corrigido para styleUrls
})
export class ForgotPasswordResetComponent implements OnInit {


  resetObj: Auth.AuthReset = {
    password: '',
    username: '',
    forgotCode: '',
  };

  forgotObj: Auth.BodyForgot = {
    email: '',
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  async resetPassword() {
    console.log(this.resetObj);
    try {
      const response = await this.authService.reset(this.resetObj).toPromise();
      console.log('Response: ', response);
    } catch (e:any) {
      console.error('Erro ao tentar resetar senha: ', e);
      alert(e.error.message);
    }
  }

  async forgotPassword() {
       try {
      const response = await this.authService.forgot(this.forgotObj).toPromise();
      console.log('Response: ', response);
    } catch (e:any) {
      console.error('Erro ao tentar recuperar senha: ', e);
      alert(e.error.message);
    }
  }


}
