import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription, of } from 'rxjs';
import { Survey } from '../survey.model';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit, OnDestroy {
  surveysSubscription: Subscription;
  surveys: Survey[];

  constructor() { }

  ngOnInit() {
  }

  onEditSurvey(surveydId: string, surveyIndex: number) {
    console.log("Editing or creating survey...");
  }

  onDeleteSurvey(surveydId: string) {
    console.log("Deleting survey " + surveydId);
  }


  ngOnDestroy() {
    console.log("destroy SurveyListComponent...");
  }

}
