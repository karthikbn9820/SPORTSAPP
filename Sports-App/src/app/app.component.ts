import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports-App';
  constructor(private route:Router){}

goCategory(category:string){
  this.route.navigate(['/category',category])
}
goCompany(company:string){
  this.route.navigate(['/company',company])
}
onSearch(name:string){
  this.route.navigate(['search',name])
}



}
