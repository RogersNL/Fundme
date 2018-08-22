import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PageService {

  pages: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.pages = database.list('pages');
  }

  getPages() {
    return this.pages;
  }

  addPage(newPage: Page) {
    this.pages.push(newPage);
  }

  getPageById(pageId: string){
  return this.database.object('/pages/' + pageId);
  }

  updatePage(localUpdatedPage){
    var pageEntryInFirebase = this.getPageById(localUpdatedPage.$key);
    pageEntryInFirebase.update({title: localUpdatedPage.title, description: localUpdatedPage.artist, target: parseInt(localUpdatedPage.target), currentfund: parseInt(localUpdatedPage.currentfund)});
  }

  deletePage(localPageToDelete){
    var pageEntryInFirebase = this.getPageById(localPageToDelete.$key);
    pageEntryInFirebase.remove();
  }

}
