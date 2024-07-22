import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'seventh-page',
  templateUrl: './seventh-page.component.html',
  styleUrl: './seventh-page.component.css'
})
export class SeventhPageComponent {



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  autoplay:true,
  autoplayTimeout:3000,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 3
    },
    940: {
      items: 3
    }
  },
  nav: false
}

}
