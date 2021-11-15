import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  getPostsOfUser(id: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + '?userId=' + id);
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.url + '/' + id);
  }
}
