import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface People {
  name: string;
  age: number;
}


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
  }
  fetchPeople(): Observable<any> {
    return this.http.get('/api/v1/people');
  }
}
