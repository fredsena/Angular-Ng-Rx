import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state'
import { Users } from '../model/users';
import * as UsersActions from './user.actions';

export const userFeatureKey = 'users';

export interface State extends AppState.State {
  users: Users[];
  filter: string;
  error: string;
}

export const initialState: State = {
  users: [],
  filter: '',
  error: ''  
}

const getUsersFeatureState = createFeatureSelector<State>(userFeatureKey);

export const getUsers = createSelector (
  getUsersFeatureState,
  state => state.users
);

export const getError = createSelector (
  getUsersFeatureState,
  state => state.error
);

export const usersReducer = createReducer<State> (
  initialState,
  on (UsersActions.loadUsersSuccess, (state, action): State => {
    return {
      ...state,
      users: action.users,
      filter: '',
      error: ''
    }
  }),
  on (UsersActions.loadUsersFailure, (state, action): State => {
    return {
      ...state,
      users: [],
      filter: '',
      error: action.error
    }
  })
  
);

