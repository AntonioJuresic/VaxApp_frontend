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

    hasBeenSelected: boolean = false;
    selectedSideEffectDTO: SideEffectDTO;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
    }

    getSideEffectsByShortDescription() {
        this.hasBeenSelected = false;

        this.dataService.getSideEffectsByShortDescription(this.shortDescription)
            .subscribe((res: SideEffectDTO[]) => {
                if(res) {
                    this.selectedSideEffectsDTOs = res;
                    console.log(this.selectedSideEffectsDTOs);
                };
            });
    }

    selectSideEffect(selectedSideEffectDTO: SideEffectDTO) {
        this.hasBeenSelected = true;
        this.selectedSideEffectDTO = selectedSideEffectDTO;
    }

}
