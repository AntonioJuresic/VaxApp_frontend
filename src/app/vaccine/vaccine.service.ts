import { Injectable } from '@angular/core';
import {Vaccine} from './vaccine';
import {VACCINES} from './mock-vaccines';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  constructor() { }

  getVaccines(): Observable<Vaccine[]> {
    return of(VACCINES);
  }
}
