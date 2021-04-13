import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VaccineDTO } from '../models/vaccineDTO';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class VaccineService {

    vaccinesDTO: VaccineDTO[] = [];
    vaccinesDTOSubject: BehaviorSubject<VaccineDTO[]> = new BehaviorSubject(null);


    vaccineDTO: VaccineDTO = new VaccineDTO;
    vaccineDTOSubject: BehaviorSubject<VaccineDTO> = new BehaviorSubject(null);

    constructor(private dataService: DataService) { this.ngOnInit(); }

    ngOnInit() { }

    getVaccines() {
        this.dataService.getVaccines()
            .subscribe(res => {
                if(res) {
                    this.vaccinesDTO = res;
                    console.log(this.vaccinesDTO);
                    this.vaccinesDTOSubject.next(this.vaccinesDTO);
                } else {
                    this.vaccinesDTOSubject.next(undefined);
                }
            });

        return this.vaccinesDTOSubject;
    }

    addVaccine(newVaccine) {
        this.dataService.addVaccine(newVaccine)
            .subscribe(res => {
                if(res) {
                    this.vaccinesDTO.push(res);
                    this.vaccinesDTOSubject.next(this.vaccinesDTO)
                }
            });
    }

    getVaccine(researchName) {
        this.dataService.getVaccine(researchName)
            .subscribe(res => {
                if (res) {
                    this.vaccineDTO = res;
                    console.log(this.vaccineDTO);
                    this.vaccineDTOSubject.next(this.vaccineDTO);
                } else {
                    this.vaccineDTOSubject.next(undefined);
                }
            });

        return this.vaccineDTOSubject;
    }

    deleteVaccine(researchName) {
        this.dataService.deleteVaccine(researchName)
            .subscribe(res => {
                console.log(res);
                this.vaccinesDTO = this.vaccinesDTO.filter(v => v.researchName != researchName);
                this.vaccinesDTOSubject.next(this.vaccinesDTO);
            });
    }

}
