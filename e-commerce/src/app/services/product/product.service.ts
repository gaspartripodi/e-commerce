import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

//Models
import { IProduct } from '../../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private productsUrl = 'api/products';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET products from the server */
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl)
      .pipe(
        catchError(this.handleError<IProduct[]>('getProducts', []))
      );
  }

  /** GET product by id. Will 404 if id not found */
  getProduct(id: number): Observable<IProduct> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<IProduct>(url).pipe(
      catchError(this.handleError<IProduct>(`getProduct id=${id}`))
    );
  }

  /* GET products whose name contains search term */
  searchProducts(term: string): Observable<IProduct[]> {
    if (!term.trim()) {
      // if not search term, return empty product array.
      return of([]);
    }
    return this.http.get<IProduct[]>(`${this.productsUrl}/?name=${term}`).pipe(
      catchError(this.handleError<IProduct[]>('searchProducts', []))
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}