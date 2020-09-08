import { Component, VERSION } from '@angular/core';
import { GeneralService } from './general.service';
import { Store } from '@ngrx/store';
import {AppState} from './store/store.model'
import { ProfileNameChangeAction } from './store/actions/profile.action';
 enum State{
  LOGIN = 'l',
  OTP ='o',
  ERROR ='e'
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  xyz;
  state:State
  constructor(private generalService:GeneralService, private store:Store<AppState>){
      this.state=State.ERROR;
  }
  submitXyz(){
    //this.generalService.xyz.next(this.xyz);
    this.store.dispatch(new ProfileNameChangeAction(this.xyz))
  }
  myFn(a:'a'|'b'){

  }
}
