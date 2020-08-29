import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[];
  constructor(private productService:ProductService,
    private route:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
    next:(data)=>(this.productList=data),
    error:(err)=>(console.log(err)),
    complete:()=>(console.log("Completed"))
  })
  }
  onSelect(product:Product){
    this.route.navigate([product.productId],{relativeTo:this.activatedRoute})
  }

}
