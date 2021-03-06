import { Survey } from './survey';

export class PatientSurvey implements Survey {
    siteCode: string;
    encounterCode: string;
    ervRating: string;
    ervWhyFeeling: string;
    ervComment: string;
    hfRating: number;
    hfWhyFeeling: string;
    hfComment: string;
    prepRating: number;
    preopWhyFeeling: string;
    preopComment: string;
    postopRating: number;
    postopWhyFeeling: string;
    postopcomment: string;
    dischargewhyfeelin: string;
    dischargecomment: string;
    cvrating: number;
    cvwhyfeeling: string;
    cvcomment: string;
    createdate: string;
}