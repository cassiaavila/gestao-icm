import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private apiUrl = 'http://192.168.3.30:3100/' // URL da sua API de autenticação

  constructor(protected httpClient: HttpClient) {}

  list() {
    return { count: 0, data: [{}] }
  }
}
