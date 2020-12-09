import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Users } from '../../users/model/users';
import { getError, getUsers, State } from '../../users/state/user.reducer';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  users$: Observable<Users[]>;
  errorMessage$: Observable<string>;
  userIndex: any;
  @Input() showFirstItem: boolean;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(getUsers);
    this.errorMessage$ = this.store.select(getError);

    //debugger;
    this.userIndex = "";

    if (this.showFirstItem)
    {
      this.userIndex = 0;
    }
    

    //this.userIndex = 10;
  }

}
