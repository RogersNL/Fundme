import { Component, OnInit } from '@angular/core';
import { Page } from '../page.model';
import { Router } from '@angular/router';
import { PageService } from '../page.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
  providers: [PageService]
})
export class PageListComponent implements OnInit {

  pages: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

    constructor(private router: Router, private pageService: PageService){}

    ngOnInit(){
      this.pages = this.pageService.getPages();
    }

    goToDetailPage(clickedPage) {
      this.router.navigate(['pages', clickedPage.$key]);
    };

}
