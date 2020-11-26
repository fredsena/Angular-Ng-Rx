import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../state/user.reducer';

import * as UsersActions from '../state/user.actions';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {

  public _filterSearch: string;

  public get filterSearch(): string {
    return this._filterSearch;
  }

  public set filterSearch(value: string) {
    this._filterSearch = value;
    this.search();
  }

  constructor(private store: Store<State>) {  }

  ngOnInit(): void {
  }

  search(): void {
    this.store
    .dispatch(
      UsersActions.searchUsersByFilterSearchText({
        filterSearchText: this._filterSearch
      })
    );
  }
}
