import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: any = 'Testserver';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): any {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server named ' + this.serverName + ' was created!';
  }

  onUpdateServerName(event: Event): void {
    // @ts-ignore
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
