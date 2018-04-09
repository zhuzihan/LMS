import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculateComponent } from '../index/calculate.component';
import { CalIndexComponent } from '../calculate/cal-index.component';

const CalRoutes: Routes = [
  {
    path: 'calculate',
    component: CalculateComponent,
    children: [
      {
        path: '', component: CalIndexComponent,
      },
      // 计算主页
      { path: 'calIndex', component: CalIndexComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(CalRoutes)],
  exports: [RouterModule]
})
export class CalRoutingModule { }
