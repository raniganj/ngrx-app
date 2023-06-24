import { counterReducer } from "./counter.reducer"

export interface MyAppState {
  counter : number
}


export const rootReducer = {
   counter : counterReducer
}
