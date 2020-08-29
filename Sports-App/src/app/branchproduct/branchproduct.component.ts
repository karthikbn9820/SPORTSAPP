import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-branchproduct',
  templateUrl: './branchproduct.component.html',
  styleUrls: ['./branchproduct.component.css']
})
export class BranchproductComponent implements OnInit {
  branchName:string
  productList:Product[];
  constructor(private activatedRoute:ActivatedRoute,private route:Router,
    private productService:ProductService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.branchName=param.get("branch");
    })
    this.productService.getProductByBranch(this.branchName).subscribe({
      next:(data)=>{this.productList=data},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log("completed")}
    })
  }
  onSelect(product:Product){
    this.route.navigate(['/productList',product.productId])
  }

}
