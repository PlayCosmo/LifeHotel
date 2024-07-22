import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routerPages/home/home.component';
import { RoomsComponent } from './routerPages/rooms/rooms.component';
import { RestaurantComponent } from './routerPages/restaurant/restaurant.component';
import { ContactComponent } from './routerPages/contact/contact.component';
import { GalleryComponent } from './routerPages/gallery/gallery.component';
import { BiltmoreComponent } from './routerPages/gallery/biltmore/biltmore.component';
import { RadisonComponent } from './routerPages/gallery/radison/radison.component';
import { MarriotComponent } from './routerPages/gallery/marriot/marriot.component';
import { BiltmoreRoomsDetailComponent } from './routerPages/gallery/biltmore/biltmore-rooms-detail/biltmore-rooms-detail.component';
import { RoomsGalleryComponent } from './rooms-gallery/rooms-gallery.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'rooms', component:RoomsComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'restaurant', component:RestaurantComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'biltmore', component:BiltmoreComponent},
  {path: 'radison', component:RadisonComponent},
  {path: 'marriot', component:MarriotComponent},
  {path: 'roomsgallery', component:RoomsGalleryComponent},
  {path: 'login', component:LoginComponent},

  {path: 'biltmoredetails/:id', component:BiltmoreRoomsDetailComponent},

  {path: '**', component:NotFoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
