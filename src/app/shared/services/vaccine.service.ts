import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VaccineDTO } from '../models/vaccineDTO';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class VaccineService {

    vaccineDTOs: VaccineDTO[] = [];
    vaccineDTOsSubject: BehaviorSubject<VaccineDTO[]> = new BehaviorSubject(null);

    constructor(private dataService: DataService) { }

    getVaccines() {
        this.dataService.getVaccines()
            .subscribe((res: VaccineDTO[]) => {
                if(res) {
                    this.vaccineDTOs = res;
                    console.log(this.vaccineDTOs);
                }

                this.vaccineDTOsSubject.next(res);
            });

        return this.vaccineDTOsSubject;
    }

    addVaccine(newVaccine) {
        this.dataService.addVaccine(newVaccine)
            .subscribe((res: VaccineDTO) => {
                if(res) {
                    this.vaccineDTOs.push(res);
                    this.vaccineDTOsSubject.next(this.vaccineDTOs)
                }
                    
                this.vaccineDTOsSubject.next(this.vaccineDTOs);
            });
    }

    getVaccine(researchName) {
        return this.dataService.getVaccine(researchName);
    }

    deleteVaccine(researchName) {
        this.dataService.deleteVaccine(researchName)
            .subscribe(res => {
                console.log(res);
                this.vaccineDTOs = this.vaccineDTOs.filter(v => v.researchName != researchName);
                this.vaccineDTOsSubject.next(this.vaccineDTOs);
            });
    }

}
