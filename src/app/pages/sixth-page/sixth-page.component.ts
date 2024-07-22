import { Component } from '@angular/core';

@Component({
  selector: 'sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrl: './sixth-page.component.css'
})
export class SixthPageComponent {
showDrop4() {
  this.textShow4 = !this.textShow4

  this.textShow = false
  this.textShow2 = false
  this.textShow3 = false

}
showDrop3() {
  this.textShow3 = !this.textShow3

  this.textShow = false
  this.textShow2 = false
  this.textShow4 = false

}
showDrop1() {
  this.textShow2 = !this.textShow2

  this.textShow = false
  this.textShow3= false
  this.textShow4= false

}
showDrop() {
  this.textShow = !this.textShow
  this.textShow2 = false
  this.textShow3 = false
  this.textShow4 = false

}


  textShow:boolean = false
  textShow2:boolean = false
  textShow3:boolean = false
  textShow4:boolean = false

}
