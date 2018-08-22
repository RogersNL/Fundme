import { Component, Input, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
  providers: [PageService]
})


export class EditPageComponent implements OnInit {
  @Input() selectedPage;

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

  beginUpdatingPage(pageToUpdate){
    this.pageService.updatePage(pageToUpdate);
  }

  beginDeletingPage(pageToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.pageService.deletePage(pageToDelete);
    }
  }
}
