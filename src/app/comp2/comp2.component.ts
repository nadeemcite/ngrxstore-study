import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store.model';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  xyz;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select(store=>store["profile"]).subscribe(val=>{
      this.xyz=val;
    })
  }

}