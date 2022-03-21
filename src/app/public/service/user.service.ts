import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "src/app/core/model/User";
import { Observable, throwError } from "rxjs";
import { map } from 'rxjs/operators';
import { tap, catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  urlUser = "http://localhost:8080/api/user/login"

  constructor(private httpClient: HttpClient) { }

  async login(usuario: IUser): Promise<any> {
    const data = await this.httpClient.post(this.urlUser, usuario, { responseType: 'text' }).toPromise();
    return data;
  }
    // if (data != "Error") {
    //   localStorage.setItem('token', data);
    //   window.location.href = "/admin";
    // } else {
    //   window.location.href = "/home";
    // }


  

  private handleError(error: Response) {
    console.log(error);
    const msg = 'Error status code ' + error.status + 'status' + error.statusText
    return throwError(msg);
  }

  //   login(data:IUser) {
  //     return this.httpClient.post<any>(this.urlUser,data)
  //         .pipe(map(user => {
  //           alert('desde service: '+JSON.stringify(user))
  //             return user;
  //         }));
  // }

  //  login(user:IUser):Promise<Observable<IUser>>{
  //   var token =  this.httpClient.post<IUser>(this.urlUser,user)
  //   console.log(token);
  //   return  token;
  //     }

  //   getProducts():Observable<IUser[]>{
  //     return this.httpClient.post<IUser[]>(this.urlUser).pipe(
  //       tap(console.log),
  //        catchError(this.handleError)
  //     )
  // }

  // private handleError(error:Response){
  //   console.log(error);
  //   const msg = 'Error status code '+error.status+'status'+ error.statusText 
  //   return throwError(msg); 
  // }
}