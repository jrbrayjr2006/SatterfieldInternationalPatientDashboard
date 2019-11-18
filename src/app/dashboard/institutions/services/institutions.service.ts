import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institution } from '../model/institution.model';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {

  rootUrl: string = '/survey-service';

  constructor(private httpClient: HttpClient) { }

  getAllInstitutions(): Observable<Institution[]> {
    console.debug('getAllInstitutions() called...');
    let institutions: Observable<Institution[]> = this.httpClient.get<Institution[]>(this.rootUrl + "/institutions");
    return institutions;
  }
}
