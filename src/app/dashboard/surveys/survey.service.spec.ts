import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PactWeb, Matchers } from "@pact-foundation/pact-web";
import { SurveyService } from './survey.service';
import { PhysicianSurvey } from './physician-survey';
import { Pact } from '@pact-foundation/pact-web/pact';
import { PatientSurvey } from './patient-survey';

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
      service.getAllPhysicianSurveys().subscribe( data => {} );

      // set expectations for httpMock
      const req = httpMock.expectOne(service.rootUrl + '/getallphysiciansurveys');
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
      // call the service
      service.getAllPatientSurveys().subscribe( data => {} );
      // set expectations for httpMock
      const req = httpMock.expectOne(service.rootUrl + '/getallpatientsurveys');
      expect(req.request.method).toEqual('GET');

      // set fake data to be returned from mock
      req.flush( {data: {}} );
    })
  );

  it('expects service to create patient data', inject([HttpTestingController, SurveyService], 
    (mockHttp: HttpTestingController, service, SurveyService) => {
    console.warn('Not implemented yet!');
    // call the service

    // set expectations for httpMock

    // set fake data to be returned from mock
  }));
});

describe('PACT for survey service API', () => {
  let provider:PactWeb;
  beforeAll(function(done) {
    provider = new PactWeb({
      consumer: 'survery-ui',
      provider: 'survey-service',
      port: 1234,
      host: 'localhost'
    });

    // require for slower CI environments
    setTimeout(done, 2000);
    //
    provider.removeInteractions();
  });

  afterAll(function(done) {
    provider.finalize()
    .then(function() {
      done();
    }, function(err) {
      done.fail(err);
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        SurveyService
      ]
    });
  });

  afterEach((done) => {
    provider.verify().then(done, e => done.fail(e));
  });

  describe('getAllPatientSurveys', () => {
    const expectedPatientSurveys: PatientSurvey[] = [];

    beforeAll((done) => {
      provider.addInteraction({
        state: `provider returns list of patient surveys`,
        uponReceiving: 'a request to GET patient surveys',
        withRequest: {
          method: 'GET',
          path: '/survey-service/getallpatientsurveys'
        },
        willRespondWith: {
          status: 200,
          body: Matchers.somethingLike({
              surveys: expectedPatientSurveys
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }).then(done, error => done.fail(error));
    });

    it('should get all patient surveys', (done) => {
      const surveyService: SurveyService = TestBed.get(SurveyService);
      surveyService.getAllPatientSurveys().subscribe(response => {
        console.info('testing patient survey retrieval...');
        done();
      }, error => {
        done.fail(error);
      });
    });
  });

  describe('getAllPhysicianSurveys', () => {
    const expectedPhysicianSurveys: PhysicianSurvey[] = [
      {
        siteCode: "MAS",
        encounterCode: "",
        ervRating: 2,
        ervWhyFeeling: "",
        ervComment: "",
        hfRating: 2,
        hfWhyFeeling: "",
        hfComment: "",
        prepRating: 2,
        preopWhyFeeling: "",
        preopComment: "",
        postopRating: 2,
        postopWhyFeeling: "",
        postopcomment: "",
        dischargewhyfeelin: "",
        dischargecomment: "",
        cvrating: 2,
        cvwhyfeeling: "",
        cvcomment: "",
        createdate: ""
      }
    ];

    beforeAll((done) => {
      provider.addInteraction({
        state: `provider returns list of physician surveys`,
        uponReceiving: 'a request to GET physician surveys',
        withRequest: {
          method: 'GET',
          path: '/survey-service/getallphysiciansurveys'
        },
        willRespondWith: {
          status: 200,
          body: Matchers.somethingLike({
              surveys: expectedPhysicianSurveys
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }).then(done, error => done.fail(error));
    });

    it('should get all physician surveys', (done) => {
      const surveyService: SurveyService = TestBed.get(SurveyService);
      surveyService.getAllPhysicianSurveys().subscribe(response => {
        console.info('testing...');
        done();
      }, error => {
        done.fail(error);
      });
    });

  });

  describe('createNewPatientSurvey', () => {});

});
