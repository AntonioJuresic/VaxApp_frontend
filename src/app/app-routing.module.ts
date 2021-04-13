import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccineEditComponent } from './vaccine-edit/vaccine-edit.component';
import { VaccineNewComponent } from './vaccine-new/vaccine-new.component';
import { VaccinesComponent } from './vaccines/vaccines.component';

const routes: Routes = [
    { path: "vaccines", component: VaccinesComponent },
    { path: "vaccines/:researchName", component: VaccineDetailComponent },
    { path: "new", component: VaccineNewComponent },
    { path: "edit/:researchName", component: VaccineEditComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
