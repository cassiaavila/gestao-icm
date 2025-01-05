import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Auth} from '../data-type/auth-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://192.168.3.30:3100/'; // URL da sua API de autenticação

  constructor(protected httpClient: HttpClient) {
  }

  login(body: Auth.BodyLogin) {
  return this.httpClient.post(this.apiUrl+ 'login', body, {})

  }
  signup(body: Auth.BodyRegister) {
    return this.httpClient.post(this.apiUrl+ 'register', body, {})
  }

  logout(): void {
    // Lógica para realizar logout, como limpar tokens do localStorage
    console.log('Usuário desconectado');
  }

  forgot(body: Auth.BodyForgot) {
    return this.httpClient.post(this.apiUrl+ 'auth/forgot/password', body, {})


  }

  reset(body: Auth.AuthReset) {
    return this.httpClient.post(this.apiUrl+ 'auth/guest/reset-password', body, {})

  }

}
