import { Component, OnInit } from '@angular/core';
import { AreasServicesService } from 'src/app/services/infected-area/areas-services.service';

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.scss']
})
export class AreasListComponent implements OnInit {

  public listData: any;
  public infoZone: any;
  public plantList: any;
  public zoneActive: any = {
    id_zone: null,
    countplant: null,
    countInfect: null,
    id_municipality: null,
    id_department: null,
  };

  constructor(private AreaServices: AreasServicesService) { }

  getAreaList() {
    return this.AreaServices.getListAreas()
      .subscribe(m => {
        this.listData = m;
      });
  }

  getDataTable(id: string, {id_zones, countplant, id_municipality, id_department}: any) {
    this.AreaServices.getInfectionByZone(id)
      .subscribe(m => {
        this.infoZone = m;
        this.zoneActive = {
          id_zones, 
          countplant,
          id_municipality,
          id_department,
          countInfect: 0
        };

        for (const key in this.infoZone) {
          this.zoneActive['countInfect'] += this.infoZone[key]['infec'];
        }

      });

      this.AreaServices.getPlantsByZone(id)
      .subscribe(m => {
        this.plantList = m;
      });
  }


  ngOnInit(): void {
    this.getAreaList()
  }

}
