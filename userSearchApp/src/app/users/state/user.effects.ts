import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { UsersService } from '../service/users.service';
import * as UsersActions from '../state/user.actions';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private usersService: UsersService) {}

    loadUsers$ = createEffect( () => {
      return this.actions$.pipe(
        ofType(UsersActions.searchUsersByFilterSearchText),
        mergeMap( action => 
          this.usersService.getUsersByFullSearchText(action.filterSearchText)
          .pipe(
            map( users => UsersActions.loadUsersSuccess({users})),
            catchError(error => of(UsersActions.loadUsersFailure({error})))
          ),
        )          
      );
    })
}
