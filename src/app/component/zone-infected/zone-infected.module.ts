import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneInfectedRoutingModule } from './zone-infected-routing.module';
import { AreasListComponent } from './pages/areas-list/areas-list.component';




@NgModule({
  declarations: [
    AreasListComponent
  ],
  imports: [
    CommonModule,
    ZoneInfectedRoutingModule
  ]
})
export class ZoneInfectedModule { }
