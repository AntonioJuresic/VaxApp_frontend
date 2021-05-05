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

    vaccineDTOs: VaccineDTO[] = [];
    vaccineDTOsSubject: BehaviorSubject<VaccineDTO[]> = new BehaviorSubject(null);
    subscription: Subscription;

    errorMessage: String;

    QueryName = '';

    constructor(private vaccineService: VaccineService) { }

    ngOnInit(): void {
        this.getVaccines();
    }

    getVaccines(): void {
        this.vaccineDTOsSubject = this.vaccineService.getVaccines();
        this.subscription = this.vaccineDTOsSubject
            .subscribe(res => {
                if (res) {
                    this.vaccineDTOs = res;
                }
            });
    }

    deleteVaccine(i) {
        let deleteVaccineDTO = this.vaccineDTOs[i];
        this.vaccineService.deleteVaccine(deleteVaccineDTO.researchName);
    }

}
