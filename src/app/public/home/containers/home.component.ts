import {Component, OnInit} from '@angular/core'
import { IProduct } from 'src/app/core/model/Product';
import { ProductService } from '../../service/product.service';

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{

    products:IProduct[]=[]

    constructor(private ps:ProductService){}

    ngOnInit(){
        this.getProducts();
    }

    getProducts(){
       
        this.ps.getProducts().subscribe(
          data=> this.products = data,
          error => console.log(error)
          )
            console.log(this.products);
      }
}