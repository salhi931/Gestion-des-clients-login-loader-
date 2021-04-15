import {Input, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {Component, OnInit} from '@angular/core';
import { LoginService} from './services/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'backoffice';
  login = false;
  role : any;
  constructor(private loginservice: LoginService,  private router: Router, private route: ActivatedRoute) {
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
  logout(){
    this.login = false;
    this.router.navigate(['/login'], {relativeTo: this.route});
    // tslint:disable-next-line:no-unused-expression
  }
}
