import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {ConfigurationService} from "../../services/configuration.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;

  constructor( public loginService: LoginService , private router: Router, private route: ActivatedRoute, private config: ConfigurationService) { }
  ngOnInit(): void {
    this.loginService.getusers();
  }
  authendicated(form: NgForm){
    const username = form.value.username;
    console.log(username);
    console.log(form.value.password);
    this.loginService.authendicated(form);
  }}
