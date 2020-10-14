import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  users: BehaviorSubject<any> = new BehaviorSubject(null);
  // users: any
  name = '';
  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
    this.pagesService.nextPage = "/third-page";
    this.pagesService.previousPage = "/first-page";
    this.retrieveUsers();
  }
  retrieveUsers() {
    
    this.pagesService.getAll()
      .subscribe(
        data => {
          // this.users = data;
          this.users.next(data);
          console.log(data, this.users);
        },
        error => {
          console.log(error)
        }
      );
  }
  refrreshList() {
    this.retrieveUsers()
  }

}
