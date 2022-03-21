import {Component, OnInit} from '@angular/core'
import { UserService } from '../../service/user.service';
import { IUser } from 'src/app/core/model/User';
@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent implements OnInit{

    users:IUser[]=[]

    constructor(private userService:UserService){}

    ngOnInit(){
        this.getUsers();
    }

    public getUsers(){
        this.userService.getUsers().subscribe(data=>{
            this.users = data;
            console.log(data);
        })
    }
}