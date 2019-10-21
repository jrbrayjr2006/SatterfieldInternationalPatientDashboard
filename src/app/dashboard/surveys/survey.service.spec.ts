import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import { HttpClient } from '@angular/common/http';
import { SurveyService } from './survey.service';

describe('SurveyService', () => {
  let httpClientSpy:  {get: jasmine.Spy};
  let surveyService: SurveyService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    surveyService = new SurveyService(<any> httpClientSpy);
    TestBed.configureTestingModule({
      providers: [SurveyService],
      imports: [
        HttpClientTestingModule
      ]
    })
  });

  afterEach(() => {inject( [HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  })});

  it('should be created', () => {
    expect(surveyService).toBeTruthy();
  });

  it('expects service to fetch survey data', inject([ HttpTestingController, SurveyService ], 
    (httpMock: HttpTestingController, service: SurveyService) => {
      // call the service
      service.getAllSurveys().subscribe( data => {} );

      // set expectations for httpMock
      const req = httpMock.expectOne(service.rootUrl + '/getallsurveys');
      expect(req.request.method).toEqual('GET');

      // set fake data to be returned from mock
      req.flush({ data: {
        siteCode: "",
        encounterCode: "",
        ervRating: "",
        ervWhyFeeling: "",
        ervComment: "",
        hfRating: "",
        hfWhyFeeling: "",
        hfComment: "",
        prepRating: "",
        preopWhyFeeling: "",
        preopComment: "",
        postopRating: "",
        postopWhyFeeling: "",
        postopcomment: "",
        dischargewhyfeelin: "",
        dischargecomment: "",
        cvrating: "",
        cvwhyfeeling: "",
        cvcomment: "",
        createdate: ""
      }});
    })
  );

  it('expects service to fetch all patient survey data', inject([ HttpTestingController, SurveyService], 
    ( httpMock: HttpTestingController, service: SurveyService) => {
    console.warn('Not implemented yet!');
    // call the service

    // set expectations for httpMock

    // set fake data to be returned from mock
  }));

  it('expects service to create patient data', inject([HttpTestingController, SurveyService], 
    (mockHttp: HttpTestingController, service, SurveyService) => {
    console.warn('Not implemented yet!');
    // call the service

    // set expectations for httpMock

    // set fake data to be returned from mock
  }));
});
