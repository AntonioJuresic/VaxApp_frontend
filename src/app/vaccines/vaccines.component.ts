import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Vaccine } from '../shared/models/vaccine';
import { VaccineService } from '../shared/services/vaccine.service';

@Component({
    selector: 'app-vaccines',
    templateUrl: './vaccines.component.html',
    styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {

    vaccines: Vaccine[];
    vaccinesSubject: BehaviorSubject<Vaccine[]> = new BehaviorSubject(null);
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
                this.vaccines = res;
            });
    }

}
