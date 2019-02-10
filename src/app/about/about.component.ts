import { DataService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUser().subscribe( data => {
      this.users = data["data"];
      console.log(this.users);
    });
  }

}
