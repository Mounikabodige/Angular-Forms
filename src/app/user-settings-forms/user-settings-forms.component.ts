import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

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
  startDate : Date;
  startTime : Date;
  singleModel = "On";
  userRating = 0;
  maxRating = 10;

  userSettings : UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes:Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubsciptipnTypes();

    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse: any)
  {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onSubmit(form: NgForm)
  {
    console.log('in onSubmit()', form.value);

    // if(form.valid)
    // {this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //    result => console.log('success :', result), 
    //    error => this.onHttpError(error)
    //     );
    // }
    // else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the errors';
    // }
   }
  onBlur(field: NgModel){
    console.log('in onBlur()', field.valid);

  }
}
