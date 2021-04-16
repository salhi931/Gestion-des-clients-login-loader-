import { Component, OnInit } from '@angular/core';
import {GestionCleintsService} from '../../services/gestionCleints.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: any;
  constructor(public gestionClient: GestionCleintsService) { }

  ngOnInit(): void {
    this.gestionClient.getClients();
    console.log(this.gestionClient.clients);
  }

}
