import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private route:Router,
    private productservice:ProductService) { }

  ngOnInit() {
  }
  goBranch(branchName:string){
    this.route.navigate(['/products',branchName])
  }

}
