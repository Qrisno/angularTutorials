import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationSatus = 'No Server was created!';
  serverName = '';
  username = '';
  servers = ['testServer', 'testServer2'];
  serverCreated = false;
  displayDetails = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(): void{
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationSatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event): void{
    this.serverName = ( event.target as HTMLInputElement).value;
  }
  onClick(): boolean{
    return !this.displayDetails;
  }
}
