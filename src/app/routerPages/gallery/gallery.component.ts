import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {


  constructor(
    public appService:AppService, 
    public router : Router ,
    public actRout: ActivatedRoute            
   ){}

  ngOnInit(): void {


       this.getHotels()

      
  }



  allHotels:any
   getHotels(){
    this.appService.getAllHotels().subscribe(data =>{
   this.allHotels  = data      
   
    })
   }

  hotelId!:number

  gotoHotelsDetails(id: any) {

     this.appService.getHotelsByID(id).subscribe( (data:any) =>{
      
      if(data.id == 1){
        this.router.navigate(['/biltmore'], {queryParams:data} )
      }
      else if(data.id == 2){
        this.router.navigate(['marriot'], {queryParams:data})
      }
      else if(data.id == 3){
        this.router.navigate(['radison'], {queryParams:data})
      }

      

     })
      

  }




   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: 3,
    dotsData: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
