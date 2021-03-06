import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VaccineNewComponent } from './vaccine-new/vaccine-new.component';
import { SideEffectsComponent } from './side-effects/side-effects.component';
import { SideEffectByResearchNameComponent } from './side-effect-by-research-name/side-effect-by-research-name.component';

@NgModule({
    declarations: [
        AppComponent,
        VaccinesComponent,
        VaccineDetailComponent,
        FilterPipe,
        VaccineNewComponent,
        SideEffectsComponent,
        SideEffectByResearchNameComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
