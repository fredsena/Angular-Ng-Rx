import { createAction, props } from '@ngrx/store';
import { Users } from '../model/users';

export const searchUsersByFilterSearchText = createAction(
  '[User] Search Users by filter search text',
  props<{filterSearchText: string}>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success', 
  props<{ users: Users[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>()
);
