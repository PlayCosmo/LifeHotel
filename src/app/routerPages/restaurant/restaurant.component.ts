import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{

  
  constructor(public appService:AppService){}

  ngOnInit(): void {
this.getFoods()

  }

  allFoods:any
  getFoods(){
    this.appService.getAllFoods().subscribe(data =>{
   this.allFoods = data
   console.log(this.allFoods);
   
    })
  }



  public foods = [
    {
      name: ' Special Meal & Vegetables ',
      img: '/assets/restaurant/breakfast-1.jpg',
      info: 'You will be able to eat as you wish with unlimited options.  ',
      price: 30
    },
    {
      name: ' Special Meal & Vegetables ',
      img: '/assets/restaurant/breakfast-2.jpg',
      info: 'You will be able to eat as you wish with unlimited options.  ',
      price: 30
    },
    {
      name: ' Special Meal & Vegetables ',
      img: '/assets/restaurant/breakfast-3.jpg',
      info: 'You will be able to eat as you wish with unlimited options.  ',
      price: 30
    },
    {
      name: ' Special Meal & Vegetables ',
      img: '/assets/restaurant/breakfast-4.jpg',
      info: 'You will be able to eat as you wish with unlimited options.  ',
      price: 30
    },
    {
      name: ' Special Meal & Vegetables ',
      img: '/assets/restaurant/breakfast-5.jpg',
      info: 'You will be able to eat as you wish with unlimited options.  ',
      price: 30
    },
    {
      name: ' Special Meal & Vegetables ',
      img: '/assets/restaurant/breakfast-6.jpg',
      info: 'You will be able to eat as you wish with unlimited options.  ',
      price: 30
    },
  ]


  showFood:boolean = false 
  hrefHide:boolean = true  

  showMore(){
    this.showFood = true
    this.hrefHide = false
  }
}
