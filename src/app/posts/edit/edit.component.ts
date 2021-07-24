import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor,toHTML } from 'ngx-editor';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit,OnDestroy {

  editor: Editor;
  html:string;

  constructor(private postService : PostService) {}  

  ngOnInit(): void {
    this.editor = new Editor();
    this.postService.getPost("a").subscribe(result=>{
      this.editor.commands
      .insertText(result)
      this.html = result;
    })
    
    this.editor.valueChanges.subscribe(v=>{
      this.postService.savePost(toHTML(v));
      console.log(v)
    });
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}