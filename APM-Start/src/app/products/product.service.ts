import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root' //registering service  in root injector so that it can be used by any component anywhere in the application.
}) // we iject service in the constructor of the class
export class ProductService{

  private productUrl= 'api/products/products.json';
  constructor(private http: HttpClient) {}

    getProduct():Observable< IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data => console.log('All', data)),catchError(this.handleError)
        );
       }
 private handleError(err: HttpErrorResponse) {
 let errorMessage='';
 if(err.error instanceof ErrorEvent){
   errorMessage = `An error occurred:  ${err.error.message}`;
}else{
  errorMessage=`Server returned code ${err.status},  with the message "${err.statusText}"`;
}   
console.error(errorMessage);
return throwError(()=>errorMessage);
  }
      
}