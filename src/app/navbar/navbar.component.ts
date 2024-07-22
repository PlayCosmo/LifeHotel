import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor( public router:Router, public appService: AppService ){

    


  }
  logeddUser: any
  login!:boolean;
  ngOnInit(): void {
    // const localUSer = localStorage.getItem('loggedUser')
    // if(localUSer != null){
    //   this.logeddUser = JSON.parse(localUSer)
      
      
      
    // }

    // this.getChangeLog()

  }

  // getChangeLog(){
  //   this.appService.sendBoolean.subscribe(data =>{
  //     this.login = data


      
  //   })
  // }



  // logOff(){
    
  //   localStorage.removeItem('loggedUser')
  //   this.router.navigateByUrl('/')
  //   this.login = false
  // }

  goToLogin(){
    this.router.navigateByUrl('/login')
  }



  menuBar:boolean = true

  pageOpen:boolean = false
closPage() {
  this.menuBar = true
  this.pageOpen = false
}

openPage() {
  
  this.pageOpen = !this.pageOpen
  this.menuBar = false
}






  hideShow: boolean = false

show() {
  this.hideShow = true
}
hide() {
  this.hideShow = false
}











dropShow:boolean = false

dropOpen() {
  this.dropShow = true
}

dropClose() {
  this.dropShow = false
}





}
