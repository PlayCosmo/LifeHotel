import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-marriot',
  templateUrl: './marriot.component.html',
  styleUrl: './marriot.component.css'
})
export class MarriotComponent implements OnInit{
constructor(
      public actRout:ActivatedRoute,
      public appService:AppService
){}

  ngOnInit(): void {
   this.getParams()
   this.getHotelsId()
  }
  
  hotelId:any
  getParams(){
    this.actRout.queryParams.subscribe((data:any)=>{
      this.hotelId = data.id

      console.log(this.hotelId);
      
    })
  }

  hotelRooms:any
  getHotelsId(){
    this.appService.getHotelsByID(this.hotelId).subscribe((data:any)=> {
    this.hotelRooms = data.rooms
    
    console.log(" dd ", this.hotelRooms);
    
    })
  }

}
