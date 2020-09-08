import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store.model';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  xyz;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select(store=>store.profile).subscribe(val=>{
      this.xyz=val;
    })
  }

}