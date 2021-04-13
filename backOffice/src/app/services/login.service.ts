
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
  // tslint:disable-next-line:variable-name
  login_status = new EventEmitter<boolean>();
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
    this.http
      .get('http://localhost:8080/web_users')
      .subscribe(data => {
        this.user = data;
      });
  }
}
