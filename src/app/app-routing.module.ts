import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalGridComponent } from './normal-grid/normal-grid.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

const routes: Routes = [
  {path:'tree-grid', component: TreeGridComponent},
  {path:'normal-grid', component: NormalGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
