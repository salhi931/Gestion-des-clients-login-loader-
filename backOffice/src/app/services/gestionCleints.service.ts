import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionCleintsService{
  clients: any;
  constructor( private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getClients(){
    this.http
      .get('http://localhost:8080/Clients')
      .subscribe(data => {
        this.clients = data;
      });
  }
}
