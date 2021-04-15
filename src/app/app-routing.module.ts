import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideEffectDetailComponent } from './side-effect-detail/side-effect-detail.component';
import { SideEffectsComponent } from './side-effects/side-effects.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccineNewComponent } from './vaccine-new/vaccine-new.component';
import { VaccinesComponent } from './vaccines/vaccines.component';

const routes: Routes = [
    { path: "vaccines", component: VaccinesComponent },
    { path: "vaccines/:researchName", component: VaccineDetailComponent },
    { path: "sideeffect", component: SideEffectsComponent },
    { path: "sideeffect/:shortDescription", component: SideEffectDetailComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
