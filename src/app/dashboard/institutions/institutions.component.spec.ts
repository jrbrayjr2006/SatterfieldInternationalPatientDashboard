import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsComponent } from './institutions.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InstitutionsComponent', () => {
  let component: InstitutionsComponent;
  let fixture: ComponentFixture<InstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ 
        InstitutionsComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list, when results returned from service', () => {
    console.warn("Test not implemented yet!");
  });
});
