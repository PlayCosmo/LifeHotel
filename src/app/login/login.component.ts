import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router:Router, public appService: AppService){}
  
  ngOnInit(): void {
  
  }


  turnSign: boolean = false


//   signIn(){
//      this.turnSign = true
//   }

//   signUp(){
// this.turnSign = false
//   }

  signUpObj: signUpModel = new signUpModel()
  loginObj: loginModel = new loginModel()


  onRegister(){
    const localUser = localStorage.getItem('loginUsers')
    

    if( localUser != null ){
      const users = JSON.parse(localUser)
      users.push(this.signUpObj)
      localStorage.setItem('loginUsers', JSON.stringify(users))
     
  
    }else{
      const users = []
      users.push(this.signUpObj)
      localStorage.setItem('loginUsers', JSON.stringify(users))

    } 
    alert('Registration Success')
    this.turnSign = !this.turnSign

    
    this.signUpObj.name = ''
    this.signUpObj.email = ''
    this.signUpObj.password = ''


  }


 public logChange: boolean = true

  onLogin(){
     const localUsers = localStorage.getItem('loginUsers')
     if( localUsers != null ){
      const users = JSON.parse(localUsers)
      const isUser = users.find( (user:signUpModel) => user.email == this.loginObj.email && user.password == this.loginObj.password )
      if(isUser != undefined && this.loginObj.email != '' && this.loginObj.password != '' ){
        alert('User Found...')
        localStorage.setItem('loggedUser', JSON.stringify(isUser))
        this.router.navigateByUrl('/')
        this.appService.sendBoolean.next(this.logChange)
         
      }

      else{
        alert('User Not Found')
      }
     }
  }

}


export class signUpModel {

  name:string;
  email: string;
  password:string;

  constructor(){
    this.email = ''
    this.name = ''
    this.password = ''
  }

}


export class loginModel {

  email: string;
  password:string;

  constructor(){
    this.email = ''
    this.password = ''
  }

}
