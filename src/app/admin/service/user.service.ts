import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "src/app/core/model/User";
import { Observable, throwError } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class UserService {
  urlUser = "http://localhost:8080/api/user"


  constructor(private httpClient: HttpClient) { }

getUsers() {
    
    const getToken = () =>{
        let token = localStorage.getItem('token');
        if(token===null)
            token=""
        return token;
    }
      
      const headers= new HttpHeaders()
      .set('Authorization',getToken());
      
    return this.httpClient.get<IUser[]>(this.urlUser,{headers:headers})

    //   .set('content-type', 'application/json')
    //   .set('Accept', 'application/json')
    //   .set('Access-Control-Allow-Headers','Content-Type')
    //   .set('Access-Control-Allow-Origin', '*')
      

  }
}