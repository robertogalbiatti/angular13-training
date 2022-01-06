import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',//to use as attribute
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {
  }
  //usando "on" significa que será gatilhado dentro do Template, será um evento chamado
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
}
