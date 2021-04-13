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
            .subscribe((res: VaccineDTO[]) => {
                if(res) {
                    this.vaccinesDTO = res;
                    console.log(this.vaccinesDTO);
                }

                this.vaccinesDTOSubject.next(res);
            });

        return this.vaccinesDTOSubject;
    }

    addVaccine(newVaccine) {
        this.dataService.addVaccine(newVaccine)
            .subscribe((res: VaccineDTO) => {
                if(res) {
                    this.vaccinesDTO.push(res);
                    this.vaccinesDTOSubject.next(this.vaccinesDTO)
                }
                    
                this.vaccineDTOSubject.next(res);
            });
    }

    getVaccine(researchName) {
        return this.dataService.getVaccine(researchName);
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
