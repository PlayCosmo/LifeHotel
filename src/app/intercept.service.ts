import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor{

  constructor(public loaderSer: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 this.loaderSer.startLoading()

 return next.handle(req).pipe(
  finalize(()=>{
    this.loaderSer.stopLoading()
  })
 )


  }
}
