import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartitemsComponent } from './component/cartitems/cartitems.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { MyordersComponent } from './component/myorders/myorders.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'', component:HomepageComponent
    },
    {
    path:'homepage', component :HomepageComponent
    },
    {
    path:'wishlist', component:WishlistComponent
    },
    {
    path:'cartitems', component:CartitemsComponent
    },
    {
    path:'login', component:LoginComponent
    },
    {
    path:'myorders', component:MyordersComponent
    } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
