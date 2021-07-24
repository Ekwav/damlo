import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { EditComponent } from './edit/edit.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [EditComponent, DisplayComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
