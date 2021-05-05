import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SideEffectDTO } from '../shared/models/sideEffectDTO';
import { SideEffectService } from '../shared/services/side-effect.service';
import { VaccineService } from '../shared/services/vaccine.service';

@Component({
    selector: 'app-side-effects',
    templateUrl: './side-effects.component.html',
    styleUrls: ['./side-effects.component.scss']
})
export class SideEffectsComponent implements OnInit {

    sideEffectsDTOs: SideEffectDTO[] = [];
    sideEffectsDTOsSubject: BehaviorSubject<SideEffectDTO[]> = new BehaviorSubject(null);
    subscription: Subscription;

    errorMessage: String;

    constructor(private sideEffectService: SideEffectService) { }

    ngOnInit(): void {
        this.getSideEffects();
    }

    getSideEffects(): void {
        this.sideEffectsDTOsSubject = this.sideEffectService.getSideEffects();
        this.subscription = this.sideEffectsDTOsSubject
            .subscribe(res => {
                if (res) {
                    this.sideEffectsDTOs = res;
                }
            });
    }

}
