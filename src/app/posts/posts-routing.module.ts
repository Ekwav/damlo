import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {DisplayComponent} from './display/display.component';

const routes: Routes = [
  {
      path: 'posts', component: DisplayComponent,
      children: [
          { path: '', component: DisplayComponent },
          { path: 'edit', component: EditComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
