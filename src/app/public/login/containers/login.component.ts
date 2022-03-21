import {Component, OnInit} from '@angular/core'
import { IUser } from 'src/app/core/model/User';
import { UserService } from '../../service/user.service';
import Swal from 'sweetalert2';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
    // user: IUser[] = [];
    email?: string;
  password?: string;

    constructor(private userService:UserService){}
    ngOnInit(){}

    login(event: any) {
        event.preventDefault();
        const usuario: IUser = {
          email: this.email,
          password: this.password
        };
        
         var respuesta = this.userService.login(usuario).then(data=>{
          window.location.href="/admin";
         },err=>{
           if(err.status===401){
            Swal.fire({
              title:'¡Se produjo un problema!',
              text:'Las credenciales no son válidas',
              icon:'info'
            })
           }
         })
        //alert(JSON.stringify(respuesta));
    
      }
}