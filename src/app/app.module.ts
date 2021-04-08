import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import { VaccineDetailInformationComponent } from './vaccine-detail-information/vaccine-detail-information.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinesComponent,
    VaccineDetailComponent,
    FilterPipe,
    VaccineDetailInformationComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
