import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideEffectDTO } from '../models/sideEffectDTO';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class SideEffectService {

    sideEffectsDTO: SideEffectDTO[] = [];
    sideEffectsDTOSubject: BehaviorSubject<SideEffectDTO[]> = new BehaviorSubject(null);

    constructor(private dataService: DataService) { this.ngOnInit(); }

    ngOnInit() { }

    getSideEffects() {
        this.dataService.getSideEffects()
            .subscribe((res: SideEffectDTO[]) => {
                if(res) {
                    this.sideEffectsDTO = res;
                    console.log(this.sideEffectsDTO);
                }

                this.sideEffectsDTOSubject.next(res);
            });

        return this.sideEffectsDTOSubject;
    }

    getSideEffect(shortDescription) {
        return this.dataService.getSideEffect(shortDescription);
    }
}
