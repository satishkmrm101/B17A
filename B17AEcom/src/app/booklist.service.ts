import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://bookcart.azurewebsites.net/api/book/')
    .pipe(
      map((response:any=[]) => response.map((item: { [x: string]: any; }) => item['title']))
    )
  }
  getCount() {
    return this.http.get('https://bookcart.azurewebsites.net/api/user/73408')
  }
  getwishlist(){
    return this.http.get('https://bookcart.azurewebsites.net/api/user/16124')
  }
}