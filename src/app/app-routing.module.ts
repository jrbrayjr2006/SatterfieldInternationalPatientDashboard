import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionsComponent } from './dashboard/institutions/institutions.component';
import { SurveysComponent } from './dashboard/surveys/surveys.component';


const routes: Routes = [
  { path: '', redirectTo: '/institutions', pathMatch: 'full' },
  { path: 'institutions', component: InstitutionsComponent },
  { path: 'surveys', component: SurveysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
