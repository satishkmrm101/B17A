import { Component, OnInit } from '@angular/core';
import { BooklistService } from 'src/app/booklist.service';

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.scss']
})
export class SearchinputComponent implements OnInit {
  books = [];
  searchinput = '';
  showDropdown = false;
  cartcount: any = 6;
  wishlistcount: any = 6;
  login: boolean = false;
  filteredOptions: any = [];
  constructor(public book: BooklistService) { }

  ngOnInit() {
    this.getData()
    this.showDropdown = false
  }

  search(e: any) {
    let search = e.target.value
    if (e.target.value.length > 0) {
      this.showDropdown = true
      this.filteredOptions = this.books.filter((book: any) => {
        return book.toLowerCase().includes(search.toLowerCase())
      });
    } else {
      this.showDropdown = false
    }
    console.log(this.filteredOptions)
  }
  getData() {
    this.book.getData()
      .subscribe((response: any) => {
        this.books = response;
        console.log(this.books)
      });
  }
  logout() {
    this.login = true;
  }
  loginS() {
    this.login = false;
  }

  cancelSearch(){
    this.showDropdown = false
  }
}