import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private route:Router,
    private productservice:ProductService) { }
  category:string;
  product:Product[];
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
    this.category=param.get("category");
    this.productservice.getProductByCategory(this.category).subscribe({
      next:(data)=>{this.product=data
      console.log(data)},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log("completed")}
    })
    })
  }
  onSelect(product:Product){
    this.route.navigate(['/productList',product.productId])
  }

}
