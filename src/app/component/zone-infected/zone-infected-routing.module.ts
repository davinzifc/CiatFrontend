import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasListComponent } from './pages/areas-list/areas-list.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'list', component: AreasListComponent},
      {path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneInfectedRoutingModule { }
