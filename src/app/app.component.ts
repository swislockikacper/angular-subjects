import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  message = '';
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(m => {
      if (m) {
        this.message = m;
      } else {
        this.message = '';
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
