import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  detailsShow: boolean = false;
  log: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(): void {
    this.detailsShow = !this.detailsShow;
    this.log.push(this.log.length + 1);
  }
}
