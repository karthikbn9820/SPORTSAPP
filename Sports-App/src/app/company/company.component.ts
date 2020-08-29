import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company:string
  productlist:Product[]
  constructor(private activatedRoute:ActivatedRoute,private route:Router,
    private productservice:ProductService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.company=param.get("company");
      this.productservice.getProductByCompany(this.company).subscribe({
        next:(data)=>{this.productlist=data
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
