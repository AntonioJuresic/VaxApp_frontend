import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideEffectDTO } from '../models/sideEffectDTO';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class SideEffectService {

    sideEffectDTOs: SideEffectDTO[] = [];
    sideEffectDTOsSubject: BehaviorSubject<SideEffectDTO[]> = new BehaviorSubject(null);

    selectedSideEffectsDTOs: SideEffectDTO[] = [];
    selectedSideEffectsDTOsSubject: BehaviorSubject<SideEffectDTO[]> = new BehaviorSubject(null);

    constructor(private dataService: DataService) { }

    getSideEffects() {
        this.dataService.getSideEffects()
            .subscribe((res: SideEffectDTO[]) => {
                if(res) {
                    this.sideEffectDTOs = res;
                    console.log(this.sideEffectDTOs);
                }

                this.sideEffectDTOsSubject.next(res);
            });

        return this.sideEffectDTOsSubject;
    }

    getSideEffectsByResearchName(researchName) {
        this.dataService.getSideEffectsByResearchName(researchName)
            .subscribe((res: SideEffectDTO[]) => {
                if(res) {
                    this.selectedSideEffectsDTOs = res;
                    console.log(this.selectedSideEffectsDTOs);
                }

                this.selectedSideEffectsDTOsSubject.next(res);
            });

        return this.selectedSideEffectsDTOsSubject;
    }
}
