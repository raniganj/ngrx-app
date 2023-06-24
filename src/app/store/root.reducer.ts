import { counterReducer } from "./counter.reducer"
import { UserData1, userData1Reducer } from "./user.reducer";

export interface MyAppState {
  counter : number;
  userData1 : UserData1
}


export const rootReducer = {
   counter : counterReducer,
   userData1 : userData1Reducer
}
