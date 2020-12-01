import { Injectable } from '@angular/core';
import { Users } from '../model/users';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { getUsers } from '../state/user.reducer';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly usersUrl = "http://localhost:3000/users";
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]>{
    
    return this.http.get<Users[]>(this.usersUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),      
      catchError(this.handleError)
    );
  }

  getUsersByFullSearchText(search: string): Observable<Users[]> {

    if (search === null)
    {
      return this.getUsers();
    }

    return this.http.get<Users[]>(this.usersUrl + '?q=' + search)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
