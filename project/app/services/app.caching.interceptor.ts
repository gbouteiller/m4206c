import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppCachingInterceptor implements HttpInterceptor {
  cache = {};

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.cache[req.urlWithParams];
    return cachedResponse
      ? of(cachedResponse)
      : next.handle(req).pipe(
          tap((response) => {
            if (response instanceof HttpResponse) this.cache[req.urlWithParams] = response;
          })
        );
  }
}
