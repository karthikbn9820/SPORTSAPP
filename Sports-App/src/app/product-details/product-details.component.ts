import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number;
  constructor(private activatedRoute:ActivatedRoute,private route:Router,
    private productService:ProductService) { }
    product:Product;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.productId=parseInt(param.get("id"));
    })
    this.productService.getProductById(this.productId).subscribe({
      next:(data)=>{this.product=data},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log("completed")}
    })
    
  }


  
}
