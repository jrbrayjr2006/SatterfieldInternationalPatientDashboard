import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListComponent } from './survey-list/survey-list.component';
import { ShortenPipe } from '../../shorten.pipe';
import { SurveysComponent } from './surveys.component';

describe('SurveysComponent', () => {
  let component: SurveysComponent;
  let fixture: ComponentFixture<SurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ShortenPipe,
        SurveyListComponent,
        SurveysComponent 
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
