import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-vaccine-detail-information',
    templateUrl: './vaccine-detail-information.component.html',
    styleUrls: ['./vaccine-detail-information.component.scss']
})
export class VaccineDetailInformationComponent implements OnInit {

    @Input() manufacturerName: String;

    constructor() { }

    ngOnInit(): void {
    }
}
