import { ProfileAction } from "../actions/profile.action";
import { ProfileActionTypes } from "../actions/profile.action";

export function ProfileReducer(
  state:string = "xyz",
  action:ProfileAction
){
  switch(action.type){
      case ProfileActionTypes.PROFILE_NAME_CHANGED:
      return action.payload
      break;
      case ProfileActionTypes.DOB_CHAGED:
      return action.payload
      return;
      break;
      default:
      return state;
  }
}