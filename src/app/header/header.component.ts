import {Component, OnInit} from '@angular/core';
import {WebsocketService} from './websocket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messageCount = 0;

  constructor(public websocketService: WebsocketService) {
  }

  ngOnInit() {
    this.websocketService.connect('ws://localhost:8085')
      .map(event => JSON.parse(event))
      .subscribe(
        event => this.messageCount = event.messageCount
      );
  }

}
