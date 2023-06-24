import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { rootEffects, rootReducer } from './store/root.reducer';
import { CounterComponent } from './component/counter/counter.component';
import { HomeComponent } from './component/home/home.component';
import { Module1Component } from './component/module1/module1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CounterComponent,
    HomeComponent,
    Module1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(rootEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
