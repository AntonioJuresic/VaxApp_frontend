import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideEffectByResearchNameComponent } from './side-effect-by-research-name/side-effect-by-research-name.component';
import { SideEffectByShortDescriptionComponent } from './side-effect-by-short-description/side-effect-by-short-description.component';
import { SideEffectsComponent } from './side-effects/side-effects.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccinesComponent } from './vaccines/vaccines.component';

const routes: Routes = [
    { path: "vaccines", component: VaccinesComponent },
    { path: "vaccines/:researchName", component: VaccineDetailComponent },
    { path: "sideeffects", component: SideEffectsComponent },
    { path: "sideeffects/search", component: SideEffectByShortDescriptionComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
