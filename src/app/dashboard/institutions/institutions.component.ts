import { Component, OnInit, OnDestroy } from '@angular/core';

import { InstitutionsService } from './services/institutions.service';
import { Institution } from './model/institution.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})
export class InstitutionsComponent implements OnInit, OnDestroy {
  institutionsSubscription: Subscription;
  institutions: Institution[];

  constructor(private institutionsService: InstitutionsService) { }

  ngOnInit() {
  }

  ngOnDestroy() {}

}
