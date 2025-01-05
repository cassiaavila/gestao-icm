import {Injectable} from '@angular/core';

interface validationService {
  username?: string,
  password?: string,
}

@Injectable({
  providedIn: 'root',
})
export class Validation {
  public validate (data: validationService): boolean {
    if(data.username || data.username === ''){
      if (data?.username.trim().length < 1) {
        alert('username cannot be empty.');
        return false
      }
      if (!data?.username.includes('@')) {
        alert('username cannot be invalid.');
        return false
      }
      const username = data?.username.split('@');
      if (username[0].length < 1 || username[1].length < 1 || !username[1].includes('.com')) {
        alert('username cannot be invalid.');
        return false
      }

    }
    if(data.password || data.password === ''){
      console.log('password')
      console.log(data)
      if (data?.password.trim().length < 1) {
        alert('password cannot be empty.');
        return false
      }
      if (data?.password.trim().length < 8) {
        alert('password must have at least 8 characters long.');
        return false
      }
    }

    return true
  }

}
