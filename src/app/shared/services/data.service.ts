import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { VaccineDTO } from "../models/vaccineDTO";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { SideEffectDTO } from "../models/sideEffectDTO";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiRoot = environment.apiRoot;

    vaccinesRoot = "/vaccine";
    sideEffectsRoot = "/sideeffect";

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


    /* 4. LABOS DODATNI ZADATAK */

    getSideEffects(): Observable<SideEffectDTO[]> {
        return this.http.get<SideEffectDTO[]>(this.apiRoot + this.sideEffectsRoot).pipe(
            tap((sideEffectsDTO: SideEffectDTO[]) => console.log("Uspjesno dohvacanje")),
            catchError((error: any) => { return this.errorHandler<SideEffectDTO[]>(error, []); })
        )
    }

    getSideEffect(shortDescription): Observable<SideEffectDTO> {
        return this.http.get<SideEffectDTO>(this.apiRoot + this.sideEffectsRoot + `/${shortDescription}`).pipe(
            tap((sideEffectDTO: SideEffectDTO) => console.log("Uspjesno dohvacanje")),
            catchError((error: any) => { return this.errorHandler<SideEffectDTO>(error); })
        )
    }

    errorHandler<T>(error: any, returnValue?: T): Observable<T>{
        console.error(error);
        return of(returnValue as T);
    }

}

