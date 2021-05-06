import { Component, OnInit } from '@angular/core';
import { SideEffectDTO } from '../shared/models/sideEffectDTO';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'app-side-effect-by-short-description',
    templateUrl: './side-effect-by-short-description.component.html',
    styleUrls: ['./side-effect-by-short-description.component.scss']
})
export class SideEffectByShortDescriptionComponent implements OnInit {

    selectedSideEffectsDTOs: SideEffectDTO[] = [];

    shortDescription: string;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
    }

    getSideEffectsByShortDescription() {
        this.dataService.getSideEffectsByShortDescription(this.shortDescription)
            .subscribe((res: SideEffectDTO[]) => {
                if(res) {
                    this.selectedSideEffectsDTOs = res;
                    console.log(this.selectedSideEffectsDTOs);
                };
            });
    }

}
