import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NotFoundComponent} from './components/not-found/not-found.component'
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports:[
        HttpClientModule,
        RouterModule,
        
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations:[
        NotFoundComponent
    ],
    exports:[
        HttpClientModule,
        RouterModule,
        NotFoundComponent,

        FormsModule,
        ReactiveFormsModule,
    ],
    providers:[]
})

export class SharedModule{
    constructor(){}
}
