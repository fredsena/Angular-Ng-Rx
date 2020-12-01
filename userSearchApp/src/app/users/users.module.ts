import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersHomeComponent } from '../users/users-home/users-home.component';
import { UsersListComponent } from '../users/users-list/users-list.component';
import { UsersSearchComponent } from '../users/users-search/users-search.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './state/user.reducer';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { ReactiveFormsModule} from '@angular/forms';

const userRoutes: Routes = [
  { path: '', component: UsersHomeComponent }
];

@NgModule({
  declarations: [
    UsersHomeComponent,
    UsersListComponent,
    UsersSearchComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
