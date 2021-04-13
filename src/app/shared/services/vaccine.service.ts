import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VaccineDTO } from '../models/vaccineDTO';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class VaccineService {

    vaccinesDTO: VaccineDTO[] = null;
    vaccinesSubject: BehaviorSubject<VaccineDTO[]> = new BehaviorSubject(null);

    constructor(private dataService: DataService) { this.ngOnInit(); }

    ngOnInit() {
        this.dataService.getVaccines()
            .subscribe(res => {
                console.log(res);
                this.vaccinesDTO = res;
                this.vaccinesSubject.next(this.vaccinesDTO);
            });
    }

    getVaccines() {
        return this.vaccinesSubject;
    }

    addVaccine(newVaccine) {
        this.dataService.addVaccine(newVaccine)
            .subscribe(res => {
                console.log(res);
                this.vaccinesDTO.push(res);
                this.vaccinesSubject.next(this.vaccinesDTO);
            });
    }

    deleteVaccine(researchName) {
        this.dataService.deleteVaccine(researchName)
            .subscribe(res => {
                console.log(res);
                this.vaccinesDTO = this.vaccinesDTO.filter(v => v.researchName != researchName);
                this.vaccinesSubject.next(this.vaccinesDTO);
            });
    }

}
