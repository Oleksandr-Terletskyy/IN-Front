import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  users = {
    name: ''
  }
  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
    this.pagesService.nextPage = "/second-page";
    this.pagesService.previousPage = "/third-page";
  }
  saveUser() {

    const data = {
      name: this.users.name
    };
    this.pagesService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error)
        }
      )
    this.pagesService.nextPage
  }

}


