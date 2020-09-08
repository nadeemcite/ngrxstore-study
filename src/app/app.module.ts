import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { GeneralService } from './general.service';
import { StoreModule } from '@ngrx/store';
import { ProfileReducer } from './store/reducers/profile.reducer';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({
    profile:ProfileReducer
  }) ],
  declarations: [ AppComponent, HelloComponent, Comp1Component, Comp2Component ],
  bootstrap:    [ AppComponent ],
  providers: [GeneralService]
})
export class AppModule { }
