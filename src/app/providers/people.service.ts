import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, retryWhen, delay, mergeMap } from 'rxjs/operators';

export interface People {
  name: string;
  age: number;
  id: number;
}


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
  }

  uploadFile(data): Observable<HttpEvent<object>> {
    return this.http.post<HttpEvent<object>>('/api/v1/people/123/avatar', data, {
      reportProgress: true,
      observe: 'events'
    });
  }


  fetchPeople(): Observable<HttpResponse<People[]>> {
    return this.http.get<People[]>('/api/v1/people', { observe: 'response' });
  }

  // fetchPeople(): Observable<People[]> {
  //   return this.http.get<People[]>('/api/v1/people', {
  //     headers: {
  //       'app-language': 'putonghua1'
  //     }
  //   });
  // }

  // fetchPeople(): Observable<People[]> {
  //   return this.http.get<People[]>('/api/v2/people').pipe(
  //     retryWhen(error => {
  //       let retries = 2;
  //       return error.pipe(
  //         delay(1000),
  //         mergeMap(err => {
  //           if (retries-- > 0) {
  //             return of(err);
  //           } else {
  //             return throwError(err)
  //           }
  //         })
  //       );
  //     })
  //   );
  // }
}
