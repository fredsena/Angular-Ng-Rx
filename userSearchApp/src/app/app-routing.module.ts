import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersHomeComponent } from './users/users-home/users-home.component';

const routes: Routes = [  
  {
    path: '', component: UsersHomeComponent,  
    loadChildren: () =>
          import('./users/users.module').then(m => m.UsersModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
