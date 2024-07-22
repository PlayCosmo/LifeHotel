import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropHoverDirective } from './CustomDirectives/drop-hover.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { FifthPageComponent } from './pages/fifth-page/fifth-page.component';
import { SixthPageComponent } from './pages/sixth-page/sixth-page.component';
import { SeventhPageComponent } from './pages/seventh-page/seventh-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './routerPages/home/home.component';
import { RoomsComponent } from './routerPages/rooms/rooms.component';
import { RestaurantComponent } from './routerPages/restaurant/restaurant.component';
import { GalleryComponent } from './routerPages/gallery/gallery.component';
import { ContactComponent } from './routerPages/contact/contact.component';
import { RouterOutlet } from '@angular/router';
import { BiltmoreComponent } from './routerPages/gallery/biltmore/biltmore.component';
import { RadisonComponent } from './routerPages/gallery/radison/radison.component';
import { MarriotComponent } from './routerPages/gallery/marriot/marriot.component';
import { BiltmoreRoomsDetailComponent } from './routerPages/gallery/biltmore/biltmore-rooms-detail/biltmore-rooms-detail.component';
import { RoomsGalleryComponent } from './rooms-gallery/rooms-gallery.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadServiceComponent } from './load-service/load-service.component';
import { InterceptService } from './intercept.service';
import { SocialpageComponent } from './pages/socialpage/socialpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DropHoverDirective,
    MainPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
    FooterComponent,
    HomeComponent,
    RoomsComponent,
    RestaurantComponent,
    GalleryComponent,
    ContactComponent,
    BiltmoreComponent,
    RadisonComponent,
    MarriotComponent,
    BiltmoreRoomsDetailComponent,
    RoomsGalleryComponent,
    LoginComponent,
    NotFoundComponent,
    LoadServiceComponent,
    SocialpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptService,
    multi:true
  },
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
