import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from 'nativescript-feedback';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppErrorInterceptor implements HttpInterceptor {
  feedback: Feedback;

  constructor() {
    this.feedback = new Feedback();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error);
        this.feedback.error({
          title: 'ou',
        });
        return throwError(error);
      })
    );
  }

  errorMessage(error: HttpErrorResponse): string {
    if (!(error.error instanceof ErrorEvent)) return 'Une erreur Serveur est survenue.';
    console.log(error.error.error);
    switch (error.error.error) {
      case '':
        return '';
      default:
        return 'Une erreur Client inconnue est survenue.';
    }
  }
}
