import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { VaccineDTO } from "../models/vaccineDTO";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiRoot = environment.apiRoot;

    vaccinesRoot = "/vaccine";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getVaccines() { return this.http.get<VaccineDTO[]>(this.apiRoot + this.vaccinesRoot); }
    addVaccine(vaccine) { return this.http.post<VaccineDTO>(this.apiRoot + this.vaccinesRoot, vaccine); }
    editVaccine(vaccine) { return this.http.put<VaccineDTO>(this.apiRoot + this.vaccinesRoot + `/${vaccine.researchName}`, vaccine); }
    getVaccine(researchName) { return this.http.get<VaccineDTO>(this.apiRoot + this.vaccinesRoot + `/${researchName}`); }
    deleteVaccine(researchName) { return this.http.delete<String>(this.apiRoot + this.vaccinesRoot + `/${researchName}`); }
}
