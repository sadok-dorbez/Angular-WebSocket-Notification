import { Component } from '@angular/core';
import {ProjetService} from "./projet/projet.service";
import {Router} from "@angular/router";
import {WebsocketService} from "./projet/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokerplanningPIangular';
  notification: any
  constructor(private websocketService: WebsocketService) {
    let stompClient = this.websocketService.connect();
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/notification', (msg) => {
        this.notification = msg.body;
      })
    });
  }

}
