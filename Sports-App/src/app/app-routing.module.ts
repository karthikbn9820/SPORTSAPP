import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { BranchproductComponent } from './branchproduct/branchproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';

const routes: Routes = [{path:'',component:ProductListComponent},
{path:"aboutUs",component:AboutUsComponent},
{path:"productList",component:ProductListComponent},
{path:"productList/:id",component:ProductDetailsComponent},
{path:"category/:category",component:CategoryComponent},
{path:"company/:company",component:CompanyComponent},
{path:"branch",component:BranchComponent,},
{path:"products/:branch",component:BranchproductComponent},
{path:"search/:name",component:SearchproductComponent},
{path:"**",component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ProductListComponent,AboutUsComponent,
  PageNotFoundComponent,ProductDetailsComponent,CompanyComponent,BranchComponent]
