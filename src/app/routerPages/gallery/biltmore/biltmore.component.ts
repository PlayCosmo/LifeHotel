import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-biltmore',
  templateUrl: './biltmore.component.html',
  styleUrl: './biltmore.component.css'
})
export class BiltmoreComponent implements OnInit{
  constructor(
    public appService: AppService,
    public actRout:ActivatedRoute,


  ){}
  ngOnInit(): void {
      this.getParams()
      this.getAllHotels()
  }

  hotelRooms:any
  hotelName:any
  hotelPageImage:any
  hotelAddress:any

  getParams(){
    this.actRout.queryParams.subscribe((data:any)=>{
      // console.log(data);
      this.hotelName = data.name
      this.hotelPageImage = data.featuredImage
      this.hotelAddress = data.address
      this.hotelRooms = data.id
    })
  }


  getAllHotels(){
    this.appService.getHotelsByID(this.hotelRooms).subscribe((data:any) =>{
    this.hotelRooms = data
    
    })
  }






  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: false
  }





}
