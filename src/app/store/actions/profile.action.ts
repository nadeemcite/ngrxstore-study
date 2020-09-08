import { Action } from "@ngrx/store";

export enum ProfileActionTypes{
  PROFILE_NAME_CHANGED = 'profile name changed',
  DOB_CHAGED = 'dob changed'
}

export class ProfileNameChangeAction implements Action{
  type:string = ProfileActionTypes.PROFILE_NAME_CHANGED
  constructor(public payload:string){
  }
}

export class DobNameChangeAction implements Action{
  type:string = ProfileActionTypes.DOB_CHAGED
  constructor(public payload:string){
  }
}


export type ProfileAction = 
ProfileNameChangeAction |
DobNameChangeAction