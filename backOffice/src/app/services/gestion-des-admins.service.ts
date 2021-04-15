
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Form, NgForm} from '@angular/forms';
import {Web_user} from '../models/web_user';
@Injectable({
  providedIn: 'root'
})
export class GestionDesAdminsService implements OnInit{
  public users: any;
  public constructor(private http: HttpClient) {
  }

  getUsers() {
    this.http
      .get('http://localhost:8080/users')
      .subscribe(data => {
        this.users = data;
      });
  }
  AjouterAdmin(web_user: Web_user) {
  }

  ngOnInit(): void {
  }
}
