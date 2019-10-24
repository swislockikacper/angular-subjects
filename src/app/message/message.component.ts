import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  message = '';

  constructor(private messageService: MessageService) { }

  sendMessage(): void {
    this.messageService.createMessage(this.message);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }
}
