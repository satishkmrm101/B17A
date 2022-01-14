import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CartitemsComponent } from './component/cartitems/cartitems.component';
import { MyordersComponent } from './component/myorders/myorders.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { LoginComponent } from './component/login/login.component';
import { SearchinputComponent } from './component/searchinput/searchinput.component';
import { BooklistService } from './booklist.service';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CartitemsComponent,
    LoginComponent,
    MyordersComponent,
    SearchinputComponent,
    WishlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule, 
    HttpClientModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [BooklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
