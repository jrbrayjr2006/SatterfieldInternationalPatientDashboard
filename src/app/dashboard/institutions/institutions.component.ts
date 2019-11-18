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

  constructor(private institutionsService: InstitutionsService) { 
    this.institutionsSubscription = this.institutionsService.getAllInstitutions().subscribe(
      institutions => {
        this.institutions = institutions;
      }
    );
  }

  ngOnInit() {
    this.institutionsSubscription = this.institutionsService.getAllInstitutions().subscribe(
      data => {
        this.institutions = data;
      },
      error => {
        console.error("Error retrieving data!");
      }
    );
  }

  ngOnDestroy() {
    this.institutionsSubscription.unsubscribe();
  }

}
