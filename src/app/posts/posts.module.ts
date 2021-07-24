import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { EditComponent } from './edit/edit.component';
import { DisplayComponent } from './display/display.component';
import { LayoutComponent } from './layout.component';

import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditComponent, DisplayComponent,LayoutComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxEditorModule,
    FormsModule
  ]
})
export class PostsModule { }
