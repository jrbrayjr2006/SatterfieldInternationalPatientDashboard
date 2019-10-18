import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { SurveyService } from './survey.service';

describe('SurveyService', () => {
  let httpClientSpy:  {get: jasmine.Spy};
  let surveyService: SurveyService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    surveyService = new SurveyService(<any> httpClientSpy);
    TestBed.configureTestingModule({})
});

  it('should be created', () => {
    expect(surveyService).toBeTruthy();
  });
});
