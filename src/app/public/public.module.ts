import {NgModule} from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import {SharedModule} from '../core/shared/shared.module'
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
 import {CommonModule} from '@angular/common';
//  import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        PublicRoutingModule,
        SharedModule,
        CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
    ],
    declarations:[
        PublicComponent,//servira para definir la estructura padre publica
        //childrens
        HomeComponent,
        LoginComponent
    ],
    providers:[
        ProductService,
        UserService
    ]
})

export class PublicModule{
    constructor(){}
}
