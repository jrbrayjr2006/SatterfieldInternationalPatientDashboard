import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Survey } from './survey';
import { PhysicianSurvey } from './physician-survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveysSubject = new BehaviorSubject<PhysicianSurvey[]>([]);
  surveysObservable = this.surveysSubject.asObservable();
  surveys: PhysicianSurvey[] = [];
  selectedSurveySubject = new Subject<PhysicianSurvey>();

  rootUrl: string = '/survey-service';

  constructor(private httpClient: HttpClient) { }

  getAllPatientSurveys(): Observable<PhysicianSurvey[]> {
    console.log("getAllPatientSurveys...");
    return this.httpClient.get<PhysicianSurvey[]>(this.rootUrl + '/getallpatientsurveys');
  }

  getAllPhysicianSurveys() {
    console.log("getAllPhysicianSurveys()...");
    return this.httpClient.get<PhysicianSurvey[]>(this.rootUrl + '/getallphysiciansurveys');
  }

  createNewPatientSurvey(survey: PhysicianSurvey) {
    console.log("createNewPatientSurvey(survey)...");
    //TODO post a new patient survey
  }
}
