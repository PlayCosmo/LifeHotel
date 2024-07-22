import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


    getAllRooms(){
      return this.http.get('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
    }
 
    getAllHotels(){
      return this.http.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
    }


    getHotelsByID(id:number){
      return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
    }

  
    getRoomsById(id:any){
      return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
    }

   public sendBoolean: Subject<boolean> = new Subject()
   public sendLoginUser: BehaviorSubject<any> = new BehaviorSubject({})

    getAllFoods(){
      return this.http.get('https://restaurant.stepprojects.ge/api/Products/GetAll')
    }

}
