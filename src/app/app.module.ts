import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { SurveyService } from './dashboard/surveys/survey.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveysComponent } from './dashboard/surveys/surveys.component';
import { SurveyEditComponent } from './dashboard/survey-edit/survey-edit.component';
import { FooterComponent } from './footer/footer.component';
import { SurveyListComponent } from './dashboard/surveys/survey-list/survey-list.component';
import { ShortenPipe } from './shorten.pipe';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SurveysComponent,
    SurveyEditComponent,
    FooterComponent,
    SurveyListComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
