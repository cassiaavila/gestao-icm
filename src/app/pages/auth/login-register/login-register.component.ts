import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Auth} from '../data-type/auth-data';


interface SignupObj {
  username: string,
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'] // Corrigido para styleUrls
})
export class LoginRegisterComponent implements OnInit {

  signUpUsers: any[] = [];

  signupObj: any = {
    username: '',
    email: '',
    password: '',

  };
  loginObj: Auth.BodyLogin = {
    username: '',
    password: '',

  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
    console.log(this.signUpUsers);
  }

  onSignUp() {
    // debugger
    if (!this.validation(this.signupObj)) {
      return;
    }
    this.signUpUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    console.log(this.signupObj);
    this.signupObj = {
      username: '',
      email: '',
      password: '',
    };

  }

  async onLogin() {
    try {
      const response = await this.authService.login(this.loginObj).toPromise();
      console.log('Response: ', response);
    } catch (e:any) {
      console.error('Erro ao tentar fazer login: ', e);
      alert(e.error.message);
    }
  }

  validation(data: SignupObj): boolean {
    if (!data.username || data.username.trim().length < 1) {
      alert('username cannot be empty.');
      return false;
    }
    if (!data.email || data.email.trim().length < 1) {
      alert('email cannot be empty.');
      return false;
    }
    if (!data.email.includes('@')) {
      alert('email cannot be invalid.');
      return false;
    }
    const email = data.email.split('@');
    if (email[0].length < 1 || email[1].length < 1 || !email[1].includes('.com')) {
      alert('email cannot be invalid.');
      return false;
    }
    if (email[1].replace('.com', '').length < 1) {
      alert('email cannot be invalid.');
      return false;
    }
    if (this.signUpUsers.find(m => m.email === this.signupObj.email)) {
      alert('email already exists.');
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
