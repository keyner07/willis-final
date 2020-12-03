import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // private var getEvents: any;
  constructor(private http: HttpClient) {}
  private getEvents: any[];
  private searchBar: {input: string } = { input: ''};
  ngOnInit() {
    // console.log(this.getEvents.length)
    // const headers = {}
    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
      // console.log("lo hizo")
      // console.log(data);
      // this.getEvents = data
      this.getEvents = [];
      for(let i=0; i<26; i++) {
        this.getEvents.push(data[i]);
      }
    })
  }
  updateSearchResults() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
      this.getEvents = [];
      let count =0;
      for(let i=0; i<data.length; i++){
        if(data[i].title.includes(this.searchBar.input)){
          this.getEvents.push(data[i]);
          count++;
        }
        if(count > 26){
          break;
        }
      }
    })
  }
}
