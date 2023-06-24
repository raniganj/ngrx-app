import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getModule1UserByID, getModule1UserByIDSuccess } from './module1.reducer';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class Module1Effects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getSinglePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getModule1UserByID),
      switchMap(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        return this.http.get(url).pipe(
          map((responseData) => {
            return getModule1UserByIDSuccess({ response: responseData });
          }),
          catchError((error) => EMPTY)
        );
      })
    )
  );
}
