import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SideEffectDTO } from '../shared/models/sideEffectDTO';
import { SideEffectService } from '../shared/services/side-effect.service';

@Component({
    selector: 'app-side-effects',
    templateUrl: './side-effects.component.html',
    styleUrls: ['./side-effects.component.scss']
})
export class SideEffectsComponent implements OnInit {

    sideEffectsDTO: SideEffectDTO[] = [];
    sideEffectsDTOSubject: BehaviorSubject<SideEffectDTO[]> = new BehaviorSubject(null);
    subscription: Subscription;

    errorMessage: String;
    
    constructor(private sideEffectService: SideEffectService) { }

    ngOnInit(): void {
        this.getSideEffects();
    }

    getSideEffects(): void {
        this.sideEffectsDTOSubject = this.sideEffectService.getSideEffects();
        this.subscription = this.sideEffectsDTOSubject
            .subscribe(res => {
                if (res) {
                    this.sideEffectsDTO = res;}
            });
    }

}
