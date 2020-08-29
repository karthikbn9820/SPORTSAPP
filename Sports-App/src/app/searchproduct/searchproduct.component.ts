import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  name:string;
  product:Product[]
  constructor(private route:Router,private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.name=param.get("name");
    })
    this.productService.getProductByName(this.name).subscribe({
      next:(data)=>{this.product=data
      console.log(data)},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log("completed")}
    })
  }
  

}
