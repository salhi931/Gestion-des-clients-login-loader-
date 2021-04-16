import {EventEmitter, Input, NgModule, Output} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {Component, OnInit} from '@angular/core';
import { LoginService} from './services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoaderService} from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'backoffice';
  login = false;
  role: any;
  open: any = false;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(public loaderservice: LoaderService, private loginservice: LoginService,  private router: Router, private route: ActivatedRoute) {
  }

  //@Input() skipToCtrl: boolean;
  ngOnInit(){
    this.loginservice.login_status.subscribe(data => {
      this.login = data;
    });
    this.loginservice.login_role.subscribe(data => {
      this.role = data;
      console.log(this.role);
    });
  }
  Onopen(){
    this.open = !this.open;
  }
  logout(){
    this.loginservice.login_status.emit(false) ;
    this.open = false;
    this.router.navigate(['login']);
    // tslint:disable-next-line:no-unused-expression
  }
}
