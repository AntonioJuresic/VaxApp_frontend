import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VaccineDTO } from '../shared/models/vaccineDTO';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'app-vaccine-detail',
    templateUrl: './vaccine-detail.component.html',
    styleUrls: ['./vaccine-detail.component.scss']
})
export class VaccineDetailComponent implements OnInit {

    researchName: String;
    private routeSubscription: Subscription;

    vaccineDTO: VaccineDTO = new VaccineDTO;

    errorMessage: String;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.researchName = params['researchName']
        });

        this.dataService.getVaccine(this.researchName)
            .subscribe(res => {
                console.log(res);
                this.vaccineDTO = res;
                console.log(this.vaccineDTO);
            });

    }

}
