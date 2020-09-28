import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUlr;
  httpClient: any;

  constructor(httpClient: HttpClient) {

  }

  public getChat()  {
    return this.httpClient.get(this.url + "chat");
  }
}
