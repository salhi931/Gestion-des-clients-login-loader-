import {Input, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {Component, OnInit} from '@angular/core';
import { LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'backoffice';
  login: any;
  constructor(private loginservice: LoginService) {
  }
  //@Input() skipToCtrl: boolean;
  ngOnInit(){
    this.loginservice.login_status.subscribe(data => {
      this.login = data;
    });
  }
  logout(){
    this.login = false;
    // tslint:disable-next-line:no-unused-expression
  }
}
