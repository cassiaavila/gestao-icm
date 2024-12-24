import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements  OnInit {

  signUpUsers: any[]=[];

  signupObj: any = {
    userName: '',
    email: '',
    password: ''

  };
  loginObj:any= {
    email: '',
    password: '',

  }

  constructor(private authService: AuthService) {}

  onSubmit() {

  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }
  onSignUp(){
    this.signUpUsers.push(this.signupObj);
    //localStorage.setItem('username', this.signUpUsers[0].username);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    console.log(this.signupObj);
    this.signupObj = {
      userName: '',
      email: '',
      password: '',

    };

  }
  onLogin(){
    console.log()
    //debugger
    const isUserExist = this.signUpUsers.find(m => m.userName === this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('User Login Successfully');
    } else {
      alert( 'Wrong credentials.' );
    }
  }

}
