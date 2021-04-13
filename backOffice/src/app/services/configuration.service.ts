import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  // tslint:disable-next-line:variable-name
  public email_required = true;
}
