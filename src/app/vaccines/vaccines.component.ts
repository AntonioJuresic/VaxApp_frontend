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

    vaccinesDTO: VaccineDTO[] = [];
    vaccinesDTOSubject: BehaviorSubject<VaccineDTO[]> = new BehaviorSubject(null);
    subscription: Subscription;

    errorMessage: String;

    QueryName = '';

    constructor(private vaccineService: VaccineService) { }

    ngOnInit(): void {
        this.getVaccines();
    }

    getVaccines(): void {
        this.vaccinesDTOSubject = this.vaccineService.getVaccines();
        this.subscription = this.vaccinesDTOSubject
            .subscribe(res => {
                if (res) {
                    this.vaccinesDTO = res;}
            });
    }

    deleteVaccine(i) {
        let deleteVaccineDTO = this.vaccinesDTO[i];
        this.vaccineService.deleteVaccine(deleteVaccineDTO.researchName);
    }

}
