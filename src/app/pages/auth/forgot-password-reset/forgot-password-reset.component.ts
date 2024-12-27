import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './forgot-password-reset.component.html',
  styleUrls: ['./forgot-password-reset.component.scss'] // Corrigido para styleUrls
})
export class ForgotPasswordResetComponent implements OnInit {


  resetObj: any = {
    password: '',
    username: '',
    forgotCode: '',
  };

  forgotObj: any = {
    email: '',
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  resetPassword(){

  }

  forgotPassword(){

  }


  validation(data: any): boolean {
    if (!data.userName || data.userName.trim().length < 1) {
      alert('userName cannot be empty.');
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
