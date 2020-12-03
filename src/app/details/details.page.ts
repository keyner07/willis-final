import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }
  private id: number;
  details: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log('The id of this route is: ', params.id);
      // this.id = params.id;
      this.http.get<any>(`https://jsonplaceholder.typicode.com/photos/${params.id}`).subscribe(data => {
        this.details = data;
        console.log(this.details.url);
      })
    });
  }

}
