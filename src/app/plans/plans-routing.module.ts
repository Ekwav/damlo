import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanOptionsComponent } from './plan-options/plan-options.component';

const routes: Routes = [{path:'',component:PlanOptionsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
