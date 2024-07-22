import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
constructor(public appService: AppService){}


ngOnInit(): void {
    this.getRooms()
  }
  room:string[] = []
  allRooms:any
 getRooms(){
  this.appService.getAllRooms().subscribe((data:any) =>{
   this.allRooms = data
   
  })
 }


   public rooms = [
    {
       name: 'Luxure Room',
       info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',
       persons: '∷ Max: 4 Person(s)',
       size: '∷ Size: 45 m2 / 432 ft2',
       twin: '∷ Bed: King-size or twin beds',
       price: 300,
       img: '/assets/rooms/rooms-10.jpg'

    },

    {
      name: 'Couple Room',
      info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

      persons: '∷ Max: 2 Person(s)',
      size: '∷ Size: 35 m2 / 432 ft2',
      twin: '∷ Bed: King-size or twin beds',
      price: 200,
      img: '/assets/rooms/rooms-1.jpg'
   },

   {
    name: 'Special Room',
    info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

    persons: '∷ Max: 3 Person(s)',
    size: '∷ Size: 45 m2 / 432 ft2',
    twin: '∷ Bed: King-size or twin beds',
    price: 250,
    img: '/assets/rooms/rooms-2.jpg'
  },

 {
  name: 'Family Room',
  info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

  persons: '∷ Max: 4 Person(s)',
  size: '∷ Size: 45 m2 / 432 ft2',
  twin: '∷ Bed: King-size or twin beds',
  price: 220,
  img: '/assets/rooms/rooms-3.jpg'
},

{
  name: 'Standart Room',
  info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

  persons: '∷ Max: 3 Person(s)',
  size: '∷ Size: 45 m2 / 432 ft2',
  twin: '∷ Bed: King-size or twin beds',
  price: 240,
  img: '/assets/rooms/rooms-4.jpg'
},

{
  name: 'Standart Room',
  info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

  persons: '∷ Max: 4 Person(s)',
  size: '∷ Size: 45 m2 / 432 ft2',
  twin: '∷ Bed: King-size or twin beds',
  price: 200,
  img: '/assets/rooms/rooms-5.jpg'
},


{
  name: 'Standart Room',
  info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

  persons: '∷ Max: 4 Person(s)',
  size: '∷ Size: 45 m2 / 432 ft2',
  twin: '∷ Bed: King-size or twin beds',
  price: 300,
  img: '/assets/rooms/rooms-6.jpg'
},


{
  name: 'Special Room',
  info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

  persons: '∷ Max: 4 Person(s)',
  size: '∷ Size: 45 m2 / 432 ft2',
  twin: '∷ Bed: King-size or twin beds',
  price:190,
  img: '/assets/rooms/rooms-7.jpg'
},


{
  name: 'Special Room',
  info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

  persons: '∷ Max: 4 Person(s)',
  size: '∷ Size: 45 m2 / 432 ft2',
  twin: '∷ Bed: King-size or twin beds',
  price: 200,
  img: '/assets/rooms/rooms-8.jpg'
},


{
  name: 'Special Room',
  info: ' These two-person guest rooms feature a king-size bed and two double beds, with street or sea views.  vcomfort and warmth they deserve, at the highest quality. ',

  persons: '∷ Max: 4 Person(s)',
  size: '∷ Size: 45 m2 / 432 ft2',
  twin: '∷ Bed: King-size or twin beds',
  price: 200,
  img: '/assets/rooms/rooms-9.jpg'
},
   ]

}
