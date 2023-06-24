import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Module1User, getModule1UserByID } from 'src/app/store/module1.reducer';
import { MyAppState } from 'src/app/store/root.reducer';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {
  module1User: Module1User | undefined;

  constructor(private store:Store<MyAppState>) { }

  ngOnInit(): void {
    this.store.subscribe((state)=>{
      console.log(state)
      this.module1User = state.module1User;
    })
  }

  getModule1UserByID(){
    this.store.dispatch(getModule1UserByID())
  }

}
