import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {
  
  originalUserSettings : UserSettings = 
  {
    name: null,
    emailOffers : null ,
    interfaceStyling : null, 
    subscriptionType :null, 
    notes:null,
  };

  userSettings : UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit() {
  }

}
