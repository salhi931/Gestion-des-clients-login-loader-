import { Component, OnInit } from '@angular/core';
import {GestionCleintsService} from '../../services/gestionCleints.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: any;
  // tslint:disable-next-line:variable-name
  nombre_de_client_a_ajoutee = 6;
  login: any;
  constructor(public gestionClient: GestionCleintsService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.gestionClient.getClients();
    setTimeout(
      () => {
        console.log(this.gestionClient.clients);
        this.clients = this.gestionClient.clients;
      }, 50
    );


  }
  getclients(){
  }
  onAjout(){}
  onmodifier(id: number){}
  supprimer(id: number){}

}
