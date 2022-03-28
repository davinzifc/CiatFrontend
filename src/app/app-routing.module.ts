import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'areas',
    loadChildren: () => import('./component/zone-infected/zone-infected.module').then( m => m.ZoneInfectedModule)
  },
  {
    path: '**',
    redirectTo: 'areas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
