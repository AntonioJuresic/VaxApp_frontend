import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { VaccineDTO } from "../models/vaccineDTO";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

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

    getVaccines(): Observable<VaccineDTO[]> {
        return this.http.get<VaccineDTO[]>(this.apiRoot + this.vaccinesRoot).pipe(
            tap((vaccinesDTO: VaccineDTO[]) => console.log("Uspjesno dohvacanje")),
            catchError((error: any) => { return this.errorHandler<VaccineDTO[]>(error, []); })
        )
    }
    
    addVaccine(vaccine) {
        return this.http.post<VaccineDTO>(this.apiRoot + this.vaccinesRoot, vaccine).pipe(
            tap((vaccinteDTO: VaccineDTO) => console.log("Uspjesno dohvacanje")),
            catchError((error: any) => { return this.errorHandler(error); })
        )
    }

    getVaccine(researchName): Observable<VaccineDTO> {
        return this.http.get<VaccineDTO>(this.apiRoot + this.vaccinesRoot + `/${researchName}`).pipe(
            tap((vaccinteDTO: VaccineDTO) => console.log("Uspjesno dohvacanje")),
            catchError((error: any) => { return this.errorHandler<VaccineDTO>(error); })
        )
    }
    
    deleteVaccine(researchName) { return this.http.delete<String>(this.apiRoot + this.vaccinesRoot + `/${researchName}`); }

    errorHandler<T>(error: any, returnValue?: T): Observable<T>{
        console.error(error);
        return of(returnValue as T);
    }

}

