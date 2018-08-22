import { Component } from '@angular/core';
import { PageService } from '../page.service';
import { Page } from '../page.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PageService]
})
export class AdminComponent {

  constructor(private pageService: PageService) { }

    submitForm(title: string, description: string, target: number, currentfund: number) {
      var newPage: Page = new Page(title, description, target, currentfund);
      this.pageService.addPage(newPage);
    }

}
