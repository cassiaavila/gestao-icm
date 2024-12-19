import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // URL da sua API de autenticação

  constructor() {}

  login(username: string, password: string) {
    const body = { username, password };
    // return this.http.post(`${this.apiUrl}/login`, body);
  }

  logout(): void {
    // Lógica para realizar logout, como limpar tokens do localStorage
    console.log('Usuário desconectado');
  }
}
