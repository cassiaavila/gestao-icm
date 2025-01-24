import {MessageService} from 'primeng/api';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private readonly messageService: MessageService) {}

  formError(detail: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Form Error',
      detail
    })
  }
  authError(detail: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Authentication Error',
      detail
    })
  }
  authSuccess(detail: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Authentication success',
      detail
    })
  }
}
