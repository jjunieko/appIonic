import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public chats = [{
    "id": "string",
    "from": "string",
    "to": "string",
    "direction": "IN",
    "channel": "string",
    "contents": [
      {
        "type": "text",
        "text": "This is a text",
        "payload": "string"
      }
    ]
  }];

  constructor(public httpClient: HttpClient, public apiService:ApiService ) {
  }
  ngOnInit() {
    this.apiService.getChat().subscribe((response) => {
      this.chats = response.dados;
      console.log(response);
    });
  }

}
