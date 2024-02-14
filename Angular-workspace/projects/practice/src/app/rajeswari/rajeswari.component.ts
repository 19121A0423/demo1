import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-rajeswari',
  templateUrl: './rajeswari.component.html',
  styleUrl: './rajeswari.component.css'
})
export class RajeswariComponent {
  public name:String="Rajeswari";
  public age:number=21;
  public id:number=123;
  public marks:number=86;
}
