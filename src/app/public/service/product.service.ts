import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "src/app/core/model/Product";
import {Observable, throwError} from "rxjs";
import {tap,catchError} from 'rxjs/operators'



@Injectable({
    providedIn: 'root'
  })

  export class ProductService{
    urlProduct = "http://localhost:8080/api/product"

    constructor(private httpClient:HttpClient) { }
  
    getProducts():Observable<IProduct[]>{
      return this.httpClient.get<IProduct[]>(this.urlProduct).pipe(
        tap(console.log),
         catchError(this.handleError)
      )
  }

private handleError(error:Response){
  console.log(error);
  const msg = 'Error status code '+error.status+'status'+ error.statusText 
  return throwError(msg); 
}
  }