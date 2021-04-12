import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Vaccine } from "../models/vaccine";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiRoot = environment.apiRoot;

    vaccinesRoot = "/vaccine";

    constructor(private http: HttpClient) { }

    getVaccines() { return this.http.get<Vaccine[]>(this.apiRoot + this.vaccinesRoot); }
    //addVaccine(vaccine) { return this.http.post(this.apiRoot + this.vaccinesRoot, vaccine); }
    //editVaccine(vaccine) { return this.http.put(this.apiRoot + this.vaccinesRoot, vaccine); }
    //getVaccine(researchName) { return this.http.get(this.apiRoot + this.vaccinesRoot + `/${researchName}`); }
    //deleteVaccine(researchName) { return this.http.delete(this.apiRoot + this.vaccinesRoot + `/${researchName}`); }
}
