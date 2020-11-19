import { Component } from '@angular/core';
import { RestAPIService } from './rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  data = [];
  constructor(
    private restAPI: RestAPIService
  ) { }
  getData() {
    this.restAPI.getUser().subscribe(data => {
      this.data = data;
    });
  }
}
