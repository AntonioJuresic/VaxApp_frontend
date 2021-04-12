import { Injectable } from '@angular/core';
import { Vaccine } from '../models/vaccine';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class VaccineService {

    vaccines: Vaccine[] = null;
    vaccinesSubject: BehaviorSubject<Vaccine[]> = new BehaviorSubject(null);

    constructor(private dataService: DataService) { this.ngOnInit(); }

    ngOnInit() {
        this.dataService.getVaccines()
            .subscribe(res => {
                console.log(res);
                this.vaccines = res;
                this.vaccinesSubject.next(this.vaccines);
            });
    }

    getVaccines() {
        return this.vaccinesSubject;
    }
}
