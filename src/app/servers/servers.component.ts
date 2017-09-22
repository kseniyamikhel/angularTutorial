import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*template: `
    <app-server></app-server>
    <app-server></app-server>
  `,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = false;
  serverName = '';
  servers = ['TestServer'];
  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }
  ngOnInit() {
  }
  onServerCreation() {
    this.serverCreation = true;
    this.servers.push(this.serverName);
  }
  /*onServerNameChange(event) {
    this.serverName = event.target.value;
  }*/
}
