import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { BranchproductComponent } from './branchproduct/branchproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';

@NgModule({
  declarations: [
    AppComponent,
   
    ProductDetailsComponent,
   
    
    routingComponents,
   
    
    CategoryComponent,
   
    
    CompanyComponent,
   
    
    BranchComponent,
   
    
    BranchproductComponent,
   
    
    SearchproductComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
