import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { UsersService } from '../service/users.service';
import { getError, getUsers, State } from '../state/user.reducer';
import { UsersSearchComponent } from '../users-search/users-search.component';

import * as UsersActions from '../state/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  users$: Observable<Users[]>;
  errorMessage$: Observable<string>;

  public search: string;

  //constructor(private usersService: UsersService) { }

  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    //  this.usersService.getUsers().subscribe({
    //   next: usersData => {
    //     this.users$ = usersData;
    //   },
    //   error: err => this. errorMessage = err      
    // });

    var emptyString: string = "";

    this.store
      .dispatch(
        UsersActions.searchUsersByFilterSearchText({
          filterSearchText: emptyString
        })
      );

    this.users$ = this.store.select(getUsers);

    this.errorMessage$ = this.store.select(getError);

  }

  // public hasUsers():boolean {
  //   return this.users$ ;
  // }

  ngAfterViewInit() : void {
    
  }

}
