import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
    this.pagesService.nextPage = "/first-page";
    this.pagesService.previousPage = "/second-page";
  }

}
