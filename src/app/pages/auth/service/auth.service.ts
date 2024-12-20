import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Auth} from '../data-type/auth-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // URL da sua API de autenticação

  constructor() {
  }

  login(body: Auth.BodyLogin) {
    // return this.http.post(`${this.apiUrl}/login`, body);
  }

  logout(): void {
    // Lógica para realizar logout, como limpar tokens do localStorage
    console.log('Usuário desconectado');
  }

  forgot(body: Auth.BodyForgot) {

  }

  reset(body: Auth.AuthReset) {

  }

}
