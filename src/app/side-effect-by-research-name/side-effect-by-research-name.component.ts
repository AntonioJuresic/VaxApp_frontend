import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SideEffectDTO } from '../shared/models/sideEffectDTO';
import { SideEffectService } from '../shared/services/side-effect.service';

@Component({
    selector: 'app-side-effect-by-research-name',
    templateUrl: './side-effect-by-research-name.component.html',
    styleUrls: ['./side-effect-by-research-name.component.scss']
})
export class SideEffectByResearchNameComponent implements OnInit {

    private routeSubscription: Subscription;
    researchName: String

    sideEffectsDTOs: SideEffectDTO[] = [];
    sideEffectsDTOsSubject: BehaviorSubject<SideEffectDTO[]> = new BehaviorSubject(null);
    subscription: Subscription;

    errorMessage: String;

    constructor(
        private route: ActivatedRoute,
        private sideEffectService: SideEffectService
    ) { }

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.researchName = params['researchName'];
            this.getSideEffects(this.researchName);
        });
    }

    getSideEffects(researchName): void {
        this.sideEffectsDTOsSubject = this.sideEffectService.getSideEffectsByResearchName(researchName);
        this.subscription = this.sideEffectsDTOsSubject
            .subscribe(res => {
                if (res) {
                    this.sideEffectsDTOs = res;
                }
            });
    }
}
