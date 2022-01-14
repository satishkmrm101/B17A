import { Component, OnInit } from '@angular/core';
import { BooklistService } from 'src/app/booklist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  books:any=[];
  
  cartcount: any;
  wishlistcount: any = 4;
  login: boolean = false;

  constructor(public book: BooklistService) { }

  ngOnInit(): void {
    this.getData()
    this.getCount()
    this.getwishlist()
  }
  
  getData() {
    this.book.getData()
      .subscribe((bookDetails: any) => {
        this.books = bookDetails;
      });
  }
  getCount() {
    this.book.getCount()
      .subscribe((bookCount: any) => {
        this.cartcount = bookCount;
        console.log(this.cartcount)
      });  
  }

  getwishlist(){
    this.book.getwishlist()
      .subscribe((bookwishCount: any) => {
        this.wishlistcount = bookwishCount;
        console.log(this.wishlistcount)
      });  
  }

  logout() {
    this.login = true;
  }
  loginS() {
    this.login = false;
  }
}