import { Component, OnInit } from '@angular/core';
import {Vaccine} from '../vaccine/vaccine';
import {VaccineService} from '../vaccine/vaccine.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {

  vaccines: Vaccine[];
  selectedVaccine: Vaccine;

  constructor(private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.getVaccines();
  }

  getVaccines(): void {
    this.vaccineService.getVaccines()
      .subscribe(vaccines => this.vaccines = vaccines);
  }

  onSelect(vaccine: Vaccine): void {
    this.selectedVaccine = vaccine;
  }

}
