import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  public products: any = []; 
  public eleCount:number=0;
  public jeweleryCount:number=0;
  public mensCount:number=0;
  public womensCount:number=0;
  // public categoryProducts:any=[];


  ngOnInit(){
    this.getProducts("https://fakestoreapi.com/products");
  }

  public getProducts(url: any) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            this.products = data;
            this.eleCount=data.filter(function(products:any){
              return products.category==='electronics'
            }).length;
            this.jeweleryCount=data.filter(function(products:any){
              return products.category==='jewelery'
            }).length;
        
            this.mensCount=data.filter(function(products:any){
              return products.category==="men's clothing"
            }).length;
        
            this.womensCount=data.filter(function(products:any){
              return products.category==="women's clothing"
            }).length;
        })

      
  }

  public filterCategory(category: string) {
    alert("parent: "+`https://fakestoreapi.com/products/category/${category}`);
    fetch(`https://fakestoreapi.com/products/category/${category}`).then(response => response.json())
      .then(data => {
        this.products = data;
      });
  }

}
