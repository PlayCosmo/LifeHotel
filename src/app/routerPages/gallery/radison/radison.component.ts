import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-radison',
  templateUrl: './radison.component.html',
  styleUrl: './radison.component.css'
})
export class RadisonComponent implements OnInit{

 
  constructor(
       public actRout:ActivatedRoute,
       public appService:AppService
  ){}

  ngOnInit(): void {

    this.getParams()
    this.getHotelId()
  }

  hotelId:any
  getParams(){
      this.actRout.queryParams.subscribe((data:any)=>{
    this.hotelId = data.id
    console.log( 'irr', this.hotelId);
    
       })
  }

  rooms:any
  getHotelId(){
    this.appService.getHotelsByID(this.hotelId).subscribe((data:any)=>{
    this.rooms = data.rooms
    })
  }
}
