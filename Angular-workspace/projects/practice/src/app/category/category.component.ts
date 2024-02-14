import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

@Input()  public eleCount:number=0;
@Input()  public jewCount:number=0;
@Input()  public mensCount:number=0;
@Input()  public womensCount:number=0;

@Output() public customEvent:EventEmitter<string>=new EventEmitter();

public getName(category:any){
  alert(category.target.name);
  this.customEvent.emit(category.target.name);
}

}
