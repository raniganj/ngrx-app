import { state } from "@angular/animations";
import { createAction, createReducer, on, props } from "@ngrx/store";


export interface Module1User {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}

export const getModule1UserByID = createAction('Get Module1User Data By ID');
export const getModule1UserByIDSuccess = createAction('Get Module1User Data By ID Success',
  props<{ response : Module1User }>()
);

export const initialState = {};

export const module1Reducer = createReducer(
  initialState,

  on(getModule1UserByID, (state)=>{
    return state
  }),

  on(getModule1UserByIDSuccess, (state, {response})=>{
    return {...state, ...response}
  })
)
