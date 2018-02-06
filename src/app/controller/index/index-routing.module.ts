import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreviewComponent }   from './preview.component';
import { RegistrationComponent }      from './registration.component';
import { AnalysisComponent }  from './analysis.component';
import { CalculateComponent }  from './calculate.component';
import { SysManagementComponent }  from './sys-management.component';

const IndexRoutes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    //预览界面
    { path: 'preview',  component: PreviewComponent },
    //样品登记
    { path: 'registration', component: RegistrationComponent },
    //分析检测
    { path: 'analysis', component: AnalysisComponent },
    //不确定度计算
    { path: 'calculate',     component: CalculateComponent },
    //系统管理
    {path: 'sysManagement', component: SysManagementComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(IndexRoutes) ],
  exports: [ RouterModule ]
})
export class IndexRoutingModule {}