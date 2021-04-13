import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { VaccineDTO } from '../shared/models/vaccineDTO';
import { VaccineService } from '../shared/services/vaccine.service';

@Component({
    selector: 'app-vaccines',
    templateUrl: './vaccines.component.html',
    styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {

    vaccinesDTO: VaccineDTO[];
    vaccinesSubject: BehaviorSubject<VaccineDTO[]> = new BehaviorSubject(null);
    subscription : Subscription;
    
    QueryName = '';

    constructor(private vaccineService: VaccineService) { }

    ngOnInit(): void {
        this.getVaccines();
    }

    getVaccines(): void {
        this.vaccinesSubject = this.vaccineService.getVaccines();
        this.subscription = this.vaccinesSubject
            .subscribe(res => {
                this.vaccinesDTO = res;
            });
    }

    deleteVaccine(i) {
        let deleteVaccineDTO = this.vaccinesDTO[i];
        this.vaccineService.deleteVaccine(deleteVaccineDTO.researchName);
    }

}
