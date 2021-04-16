import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Form} from '@angular/forms';
import {GestionDesAdminsService} from '../../services/gestion-des-admins.service';
import {ConfigurationService} from '../../services/configuration.service';

@Component({
  selector: 'app-gestion-des-admins',
  templateUrl: './gestion-des-admins.component.html',
  styleUrls: ['./gestion-des-admins.component.css']
})
export class GestionDesAdminsComponent implements OnInit {
  listadmin = true;
  constructor(private http: HttpClient, public service: GestionDesAdminsService, public config: ConfigurationService) { }
  ngOnInit(): void {
    this.getUsers();

  }
  getUsers(){
    this.service.getUsers();
  }
  onAjout(){
    this.listadmin = false;
  }
  onmodifier(id: number){

  }
  supprimer(id: number){}
  AjouterAdmin(form: Form){
    console.log(form);

  }

}
