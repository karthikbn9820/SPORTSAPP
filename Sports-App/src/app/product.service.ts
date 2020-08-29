import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url1='http://localhost:8083/products'
  public url2='http://localhost:8083/product-by-id/'
  public burl2='http://localhost:8083/products-by-category/'
  public burl3='http://localhost:8083/products-by-company/'
  public burl4='http://localhost:8083/products-by-branch/'
  public burl5='http://localhost:8083/products-by-name/'
  url3:string;
  url4:string;
  url5:string;
  url6:string;
  url7:string;
  constructor(private http:HttpClient) { }
  
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url1);
  }
  getProductById(productId:number):Observable<Product>{
     this.url3=this.url2+productId;
    return this.http.get<Product>(this.url3);

  }
  getProductByCategory(category:string):Observable<Product[]>{
    this.url4=this.burl2+category;
   return this.http.get<Product[]>(this.url4);

 }
 getProductByCompany(company:string):Observable<Product[]>{
  this.url5=this.burl3+company;
 return this.http.get<Product[]>(this.url5);

}
getProductByBranch(branch:string):Observable<Product[]>{
  this.url6=this.burl4+branch;
 return this.http.get<Product[]>(this.url6);

}
getProductByName(name:string):Observable<Product[]>{
  this.url7=this.burl5+name;
 return this.http.get<Product[]>(this.url7);

}
}
