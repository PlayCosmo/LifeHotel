import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'load-service',
  templateUrl: './load-service.component.html',
  styleUrl: './load-service.component.css'
})
export class LoadServiceComponent implements OnInit{

  constructor(public loader: LoaderService){}

  isLoading: boolean = false
  ngOnInit(): void {
    this.loader.loading.subscribe(data =>{
      this.isLoading = data
    })

  }

}
