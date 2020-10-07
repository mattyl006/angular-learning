import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  detailsShow: boolean = false;
  log: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(): void {
    this.detailsShow = !this.detailsShow;
    this.log.push(new Date());
  }
}
