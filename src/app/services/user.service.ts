import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/' + id);
  }
}
