import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`1324234432${request}`);

    const customReq = request.clone({
      headers: request.headers.set('X-token', '3345435435')
    });

    return next.handle(customReq).pipe(
      tap(ev => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      }),
      catchError(error => {
        if (error instanceof HttpResponse) {
          console.log('processing error response', error);
        }
        return throwError(error);
      })
    );
  }



  constructor() { }
}
