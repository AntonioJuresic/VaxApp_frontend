import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SideEffectDTO } from '../shared/models/sideEffectDTO';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'app-side-effect-detail',
    templateUrl: './side-effect-detail.component.html',
    styleUrls: ['./side-effect-detail.component.scss']
})
export class SideEffectDetailComponent implements OnInit {

    private routeSubscription: Subscription;
    shortDescription: String;

    sideEffectDTO: SideEffectDTO = new SideEffectDTO;
    sideEffectDTOSubject: BehaviorSubject<SideEffectDTO> = new BehaviorSubject(null);
    subscription : Subscription;

    errorMessage: String;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService) { }

    ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.shortDescription = params['shortDescription'];
            this.getSideEffect(this.shortDescription);
        });
    }

    getSideEffect(shortDescription) {
        this.dataService.getSideEffect(this.shortDescription)
            .subscribe(res => {
                if (res) {
                    this.sideEffectDTO = res;
                    console.log(this.sideEffectDTO);
                    this.sideEffectDTOSubject.next(res);
                } else {
                    this.sideEffectDTOSubject.next(undefined);
                    this.errorMessage = "Greška";
                }
            });
    }

}
