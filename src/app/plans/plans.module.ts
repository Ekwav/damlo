import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlanOptionsComponent } from './plan-options/plan-options.component';
import { OptionComponent } from './option/option.component';


@NgModule({
  declarations: [
    PlanOptionsComponent,
    OptionComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
