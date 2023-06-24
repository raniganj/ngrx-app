import { counterReducer } from "./counter.reducer"
import { Module1Effects } from "./module1.effects";
import { Module1User, module1Reducer } from "./module1.reducer";
import { UserData1, userData1Reducer } from "./user.reducer";

export interface MyAppState {
  counter : number;
  userData1 : UserData1,
  module1User : Module1User
}

export const rootReducer = {
   counter : counterReducer,
   userData1 : userData1Reducer,
   module1User : module1Reducer
}


export const rootEffects = [Module1Effects]
