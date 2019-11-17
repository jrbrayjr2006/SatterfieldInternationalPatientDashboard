import { Survey } from './survey.model';

export class PhysicianSurvey implements Survey {
    id: string;
    siteCode: string;
    encounterCode: string;
    ervRating: number;
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