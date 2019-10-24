import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>();

  createMessage(message: string) {
    this.subject.next(message);
  }

  clearMessage(): void {
    this.subject.next();
  }

  getMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
