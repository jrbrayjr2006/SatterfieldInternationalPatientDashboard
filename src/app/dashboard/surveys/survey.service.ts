import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Survey } from './survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveysSubject = new BehaviorSubject<Survey[]>([]);
  surveysObservable = this.surveysSubject.asObservable();
  surveys: Survey[] = [];
  selectedSurveySubject = new Subject<Survey>();

  rootUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAllPatientSurveys(): Observable<Survey[]> {
    console.log("getAllPatientSurveys...");
    return this.httpClient.get<Survey[]>(this.rootUrl + '/getallpatientsurveys', {});
  }

  getAllSurveys() {
    console.log("getAllSurveys()...");
    return this.httpClient.get<Survey[]>(this.rootUrl + '/getallsurveys', {});
  }

  createNewPatientSurvey(survey: Survey) {
    console.log("createNewPatientSurvey(survey)...");
    //TODO post a new patient survey
  }
}
