import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import { Module1Component } from './component/module1/module1.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'module1',
    component: Module1Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
