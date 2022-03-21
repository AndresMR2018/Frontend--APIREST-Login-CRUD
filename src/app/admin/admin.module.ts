import {NgModule} from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../core/shared/shared.module'
import { DashboardComponent } from './dashboard/containers/dashboard.component';
import { UserComponent } from './user/containers/user.component';
import { AdminComponent } from './admin.component';
 import {CommonModule} from '@angular/common';
 import { UserService } from './service/user.service';
//  import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        AdminRoutingModule,
        SharedModule,
        CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
    ],
    declarations:[
        AdminComponent,//servira para definir la estructura padre publica
        //childrens
        DashboardComponent,
        UserComponent
    ],
    providers:[
     UserService
    ]
})

export class AdminModule{
    constructor(){}
}
