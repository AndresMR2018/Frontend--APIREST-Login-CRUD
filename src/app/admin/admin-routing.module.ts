import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/containers/dashboard.component';
import { UserComponent } from './user/containers/user.component';
import {AdminComponent} from './admin.component'

const routes: Routes = [
    {path:'',component:AdminComponent, children:
    [
        {path:'admin',redirectTo:'dashboard', pathMatch:'full'},
        {path:'dashboard',component:DashboardComponent},
        {path:'usuarios',component:UserComponent}
        // {path:'usuarios',component:DashboardComponent},
    ]
},
];

@NgModule({
imports:[
    RouterModule.forChild(routes)
],
exports:[RouterModule]
})

export class AdminRoutingModule{}