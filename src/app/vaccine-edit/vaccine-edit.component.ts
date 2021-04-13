import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VaccineDTO } from '../shared/models/vaccineDTO';
import { DataService } from '../shared/services/data.service';
import { VaccineService } from '../shared/services/vaccine.service';

@Component({
    selector: 'app-vaccine-edit',
    templateUrl: './vaccine-edit.component.html',
    styleUrls: ['./vaccine-edit.component.scss']
})
export class VaccineEditComponent implements OnInit {

    researchName: String;
    private routeSubscription: Subscription;

    vaccineDTO: VaccineDTO = new VaccineDTO;

    constructor(
        //Dohvat pojedinog cjepiva po istraživačkom nazivu
        private route: ActivatedRoute,
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
        //Dohvat pojedinog cjepiva po istraživačkom nazivu
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
