import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Auth} from '../data-type/auth-data';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'] // Corrigido para styleUrls
})
export class LoginRegisterComponent implements OnInit {
  showPassword: boolean = false;
  signupObj: Auth.BodyRegister = {
    username: '',
    password: '',
  };
  loginObj: Auth.BodyLogin = {
    username: '',
    password: '',
  }
  error: string | any
  message: string | any
 //construtor para injetar AuthService nesta classe
  constructor(private authService: AuthService, private messageService: MessageService) {

  }

  ngOnInit(): void {

  }

  async onSignUp() {
    // debugger
    if (!this.validation(this.signupObj)) {
      return;
    }
    try{
      const response = await this.authService.signup(this.signupObj).toPromise();
      console.log('Response: ', response);
    }catch(err: any){
      console.error('Erro ao tentar registrar-se', err);
      alert(err.error.message);
    }


  }

  async onLogin() {
    try {
      const response: any = await this.authService.login(this.loginObj).toPromise();
      console.log('Response: ', response);
      if(response){
        localStorage.setItem('token', JSON.stringify(response.token));
        const account = {
          id: response.account.id,
          username: response.account.username,
        }
        localStorage.setItem('account', JSON.stringify(account));
      }
      await this.messageService.add({ severity: 'success', summary: 'sucesso', detail: 'acesso liberado' });

    } catch (e:any) {
      //console.error('Erro ao tentar fazer login: ', e);
      //alert(e.error.message);

      await this.messageService.add({ severity: 'error', summary: 'sumário autenticação', detail: 'falha' });
    }
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  validation(data: Auth.BodyRegister): boolean {
    if (!data.username || data.username.trim().length < 1) {
      alert('username cannot be empty.');
      return false;
    }
    if (!data.username.includes('@')) {
      alert('username cannot be invalid.');
      return false;
    }
    const username = data.username.split('@');
    if (username[0].length < 1 || username[1].length < 1 || !username[1].includes('.com')) {
      alert('username cannot be invalid.');
      return false;
    }
    if (username[1].replace('.com', '').length < 1) {
      alert('username cannot be invalid.');
      return false;
    }
    if (!data.password || data.password.trim().length < 1) {
      alert('password cannot be empty.');
      return false;
    }
    if (data.password.trim().length < 8) {
      alert('password can have at least 8 characters long.');
      return false;
    }
    return true;
  }
}
