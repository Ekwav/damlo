import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  html: string =
    "This is a generic post that can be edited. Changes will be lost if you reload the page as this is only a demo";

  constructor() {}

  public savePost(html: string): void {
    this.html = html;
  }

  public getPost(html: string): Observable<string> {
    return of(this.html);
  }
}
