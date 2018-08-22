import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Page } from '../page.model';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css'],
  providers: [PageService]
  })
export class PageDetailComponent implements OnInit {

  pageId: string;
    pageToDisplay;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private pageService: PageService
      ) {}

    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.pageId = urlParameters['id'];
      });
      this.pageToDisplay = this.pageService.getPageById(this.pageId);
    }

}
