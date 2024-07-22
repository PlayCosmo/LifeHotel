import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
onActivate($event: any) {
  window.scroll(0,0)
}
  title = 'LifeHotel';


  

  
}
