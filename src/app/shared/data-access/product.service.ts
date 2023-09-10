import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EMPTY,
  Observable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(search: string): Observable<Product[]> {
    console.log(search);
    return this.httpClient
      .get<Product[]>('assets/sample-data.json')
      .pipe(
        map((products) =>
          products.filter((item) =>
            item.productName.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
  }
}
