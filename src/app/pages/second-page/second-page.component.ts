import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from '../../app.service';


@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent implements OnInit{
  
  



  constructor( private appService:AppService ){}
  ngOnInit(): void {
    // this.getRooms()

  }


  public images = [

     {
     img: '/assets/footer/img-84-1025x1536.jpg',
     price: 150,
     name: 'Special Room' 
     },
{     
  
  img:'/assets/footer/img-85-1024x683 (1).jpg',
  price: 200,
  name: 'Standart Room'

},
{   
  img:  '/assets/footer/marvin-meyer-fBdlytm6Hp8-unsplash-1024x683.jpg',
  name: 'Deluxe Room',
  price: 300,
},  

{
  img: '/assets/footer/mueen-agherdien-YG8dsHZxtU4-unsplash-1024x683.jpg',
  price:400,
  name: 'Couple Room'

},  
{ 
  img:  '/assets/footer/takafumi-yamashita-OjX9PWvbarc-unsplash.jpg',
 price: 100,
 name: 'Luxure Room'
},   
  ]

  AllRooms:any
  roomId:number = 0

  // showId(id:any){
  
  //   this.appService.getRoomsById(id).subscribe((data:any)=>{
  //     this.AllRooms = data.images
  //     this.roomId = id
      
  //   })
  
  // }


  // public rooms:any
  // getRooms(){
  //     this.appService.getAllRooms().subscribe(data => {
  //      this.rooms = data
       
       
  //     })
  // }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    margin:25,
    dots: false,
    dotsEach:8,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 1,
        nav:true,
        dots:false,
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

}
