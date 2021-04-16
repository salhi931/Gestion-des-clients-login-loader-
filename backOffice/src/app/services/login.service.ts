
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  public user: any;
  reponse: any;
  // tslint:disable-next-line:variable-name
  login_status = new EventEmitter<boolean>();
  login_role = new EventEmitter<boolean>();
  constructor( private http: HttpClient) {
  }
  ngOnInit(): void {
  }
  getusers(){
    this.http
      .get('http://localhost:8080/web_users')
      .subscribe(data => {
        this.user = data;
      });
  }
  authendicated(form: NgForm){
    this.http.get('http://localhost:8080/login/' + form.value.username + '/' + form.value.password).subscribe(data => {
      console.log(data);
      this.reponse = data;
      if (this.reponse.login_status === false){
        alert('le nom d\'utilisateur ou le password est incorrect');
      }
      if (this.reponse.login_status === true && this.reponse.login_role === true ){
        this.login_status.emit(true);
        this.login_role.emit(true);
        alert('vous etes connectes en tant qu\'AdminSuperieur');
      }
      if (this.reponse.login_status === true && this.reponse.login_role === false ){
        this.login_status.emit(true);
        this.login_role.emit(false);
      }
    }, error => {
      alert('une erreur s\'est produite veuillez réessayer ou contacter votre administration'); } );
  }
}
