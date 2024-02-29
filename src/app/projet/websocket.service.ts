import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
@Injectable({
 providedIn: 'root'
})
export class WebsocketService {
  public connect() {
    let socket = new SockJS(`http://localhost:8085/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }
}
