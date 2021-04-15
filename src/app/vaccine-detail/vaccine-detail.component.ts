import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { VaccineDTO } from '../shared/models/vaccineDTO';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'app-vaccine-detail',
    templateUrl: './vaccine-detail.component.html',
    styleUrls: ['./vaccine-detail.component.scss']
})
export class VaccineDetailComponent implements OnInit {

    private routeSubscription: Subscription;
    researchName: String;

    vaccineDTO: VaccineDTO = new VaccineDTO;
    vaccineDTOSubject: BehaviorSubject<VaccineDTO> = new BehaviorSubject(null);
    subscription : Subscription;

    errorMessage: String;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.researchName = params['researchName'];
            this.getVaccine(this.researchName);
        });
    }

    getVaccine(researchName){
        this.dataService.getVaccine(this.researchName)
            .subscribe(res => {
                if (res) {
                    this.vaccineDTO = res;
                    console.log(this.vaccineDTO);
                    this.vaccineDTOSubject.next(res);
                } else {
                    this.vaccineDTOSubject.next(undefined);
                    this.errorMessage = "Greška";
                }
            });
    }

}
