import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-buttons-group',
  templateUrl: './buttons-group.component.html',
  styleUrls: ['./buttons-group.component.scss']
})
export class ButtonsGroupComponent implements OnInit {

  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
  }

}
