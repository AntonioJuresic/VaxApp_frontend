import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vaccine } from '../shared/models/vaccine';
import { VaccineService } from '../shared/services/vaccine.service';

@Component({
    selector: 'app-vaccine-new',
    templateUrl: './vaccine-new.component.html',
    styleUrls: ['./vaccine-new.component.scss']
})
export class VaccineNewComponent implements OnInit {

    addVaccineForm: FormGroup;
    addVaccineErrorMessage: string;

    newVaccine: Vaccine;

    constructor(
        private vaccineService: VaccineService,

        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.addVaccineForm = this.formBuilder.group({
            researchName: new FormControl("", Validators.required),
            manufacturerName: new FormControl("", Validators.required),
            vaccineType: new FormControl("", Validators.required),
            numberOfDoses: new FormControl("", Validators.required),
            availableDoses: new FormControl("", Validators.required)
        });

    }

    get researchName(){ return this.addVaccineForm.get("researchName"); }
    get manufacturerName(){ return this.addVaccineForm.get("manufacturerName"); }
    get vaccineType(){ return this.addVaccineForm.get("vaccineType"); }
    get numberOfDoses(){ return this.addVaccineForm.get("numberOfDoses"); }
    get availableDoses(){ return this.addVaccineForm.get("availableDoses"); }

    isInputInvalid(input) {
        return input.invalid && (input.dirty || input.touched);
    }

    onSubmit() {
        if (this.addVaccineForm.invalid) {
            this.addVaccineErrorMessage = "Molimo Vas unesite sve podatke";
        } else {
            this.newVaccine = new Vaccine();

            this.newVaccine.researchName = this.addVaccineForm.value.researchName;
            this.newVaccine.manufacturerName = this.addVaccineForm.value.manufacturerName;
            this.newVaccine.vaccineType = this.addVaccineForm.value.vaccineType;
            this.newVaccine.numberOfDoses = this.addVaccineForm.value.numberOfDoses;
            this.newVaccine.availableDoses = this.addVaccineForm.value.availableDoses;

            console.log(this.newVaccine);

            this.vaccineService.addVaccine(this.newVaccine);

            //this.router.navigate(["/vaccines"]);
        }
    }

}
