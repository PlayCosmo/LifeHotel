import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-biltmore-rooms-detail',
  templateUrl: './biltmore-rooms-detail.component.html',
  styleUrl: './biltmore-rooms-detail.component.css'
})
export class BiltmoreRoomsDetailComponent implements OnInit{



  
  constructor(
      public actRout:ActivatedRoute,
       public appService:AppService
  ){}
  
  ngOnInit(): void {
  this.getParams()
  this.getRoomsId()

  
  }

  roomId:any
  getParams(){
    this.actRout.params.subscribe((data:any) => {
      this.roomId = data.id
    })
  }

  eachRooms:any
  roomsImage:any

  ind:any = 0

  getRoomsId(){
    this.appService.getRoomsById(this.roomId).subscribe((data:any)=>{
       this.eachRooms = data
       this.roomsImage = data.images

       
    })
  }



  next() {

   if(this.roomsImage.length-1 > this.ind ){
    this.ind++
   }
    
    }

    prev() {

       if(this.ind > 0){
      this.ind--
       }

    }


   zoomShow:boolean = false

   hideRoomsDetail:boolean = true

    zoomIn() {

      this.zoomShow = true
      this.hideRoomsDetail = false
    }


    closeZoom() {
      this.zoomShow = false
      this.hideRoomsDetail = true

      }
  
}
