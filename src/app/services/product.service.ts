import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from '../product/product';
@Injectable()
export class ProductService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private productsUrl = 'api/products';
  constructor(private http: HttpClient) { }
  public getProducts(): Observable<any> {
    return this.http.get(this.productsUrl)
      .pipe(
      tap(products => console.log(`fetched Products`)),
      catchError(this.handleError('getProducts', []))
      );
  }
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
