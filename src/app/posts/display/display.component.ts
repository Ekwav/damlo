import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostService } from '../post.service';

@Component({
  selector: 'app-display-post',
  templateUrl: 'display.component.html'
})
export class DisplayComponent implements OnInit {

  postValue : SafeHtml;

  constructor(private sanitizer: DomSanitizer, private postService : PostService) { }
  

  ngOnInit(): void {
    this.postService.getPost("a").subscribe((res)=> {
      /* OR */
      this.postValue = this.sanitizer.bypassSecurityTrustHtml(res);
  })
  }

}
