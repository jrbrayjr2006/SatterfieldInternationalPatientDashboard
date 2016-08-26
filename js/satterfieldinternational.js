/**
 * Created by jamesbray on 8/20/16.
 */
console.debug("Entering satterfield international application...");

var app = angular.module('satterfieldinternational', []);

var baseUrl = 'http://www.strawberry23.net:8080/satterfieldmedical';
//var baseUrl = 'http://www.docsatisfaction.com:8080/satterfieldmedical';
//var baseUrl = 'http://localhost:8080/satterfieldmedical';

app.service('patientSurveyService', function($http, $q, $log) {
    console.debug("Entering services...");

    var data = new Array();

    this.initializeSurvey = function() {
        return {
            site_code: "",
            encounter_code: "",
            ervrating: "",
            ervwhyfeeling: "",
            ervcomment: "",
            hfrating: "",
            hfwhyfeeling: "",
            hfcomment: "",
            preoprating: "",
            preopwhyfeeling: "",
            preopcomment: "",
            postoprating: "",
            postopwhyfeeling: "",
            postopcomment: "",
            dischargewhyfeelin: "",
            dischargecomment: "",
            cvrating: "",
            cvwhyfeeling: "",
            cvcomment: "",
            createdate: ""
        };
    };

    this.initializeSurveys = function() {
        return [{
            site_code: "",
            encounter_code: "",
            ervrating: "",
            ervwhyfeeling: "",
            ervcomment: "",
            hfrating: "",
            hfwhyfeeling: "",
            hfcomment: "",
            preoprating: "",
            preopwhyfeeling: "",
            preopcomment: "",
            postoprating: "",
            postopwhyfeeling: "",
            postopcomment: "",
            dischargerating: "",
            dischargewhyfeeling: "",
            dischargecomment: "",
            cvrating: "",
            cvwhyfeeling: "",
            cvcomment: "",
            createdate: ""
        }];
    };

    this.survey = this.initializeSurvey();

    /**
     *
     * @returns {promise.promise|jQuery.promise|d.promise|promise|jQuery.ready.promise|qFactory.Deferred.promise|*}
     */
    this.getAllPatientSurveys = function() {
        console.debug("Entering surveyService.getAllPatientSurveys...");
        var deferred = $q.defer();
        var serviceUrl = baseUrl + '/getallpatientsurveys';
        console.debug('The URL is ' + serviceUrl);
        $http({
            method: 'GET',
            url: serviceUrl,
            headers: {'Content-Type': 'application/json'}
        }).
        success(function(response) {
            console.debug(serviceUrl);
            deferred.resolve({data: response.data});
            data = response.data;
            console.debug(data);  //FOR DEBUG PURPOSES ONLY
        }).
        error(function(){
            console.error("Service call failure...");
            $log.error('Service call failed while performing getAllPatientSurveys function...');
            data = "{'message' : 'error'}";
            deferred.reject(data);
        });
        console.debug("Exiting surveyService.getAllPatientSurveys...");
        return deferred.promise;
    };


    this.getAllSites = function() {
        //TODO
    };

}).service('physicianSurveyService', function($http, $q, $log) {
    //TODO
});

app.controller('patientSurveyController', function($log, $scope, patientSurveyService) {
    console.debug("Entering controller...");
    var survey = this;
    //$scope.institutions = [{organizationKey:'MCNI001',organizationName:'Mercy North Iowa',demo:'DEMO'}];
    $scope.appTitle = "Satterfield Services International";
    $scope.surveyData = patientSurveyService.initializeSurveys();
    $scope.addInstitutionFormData = {};
    $scope.test = "Satterfield Test";

    /**
     *
     */
    $scope.getAllPatientSurveys = function() {
        console.debug("patientSurveyController.getAllPatientSurveys()...");
        var surveyPromise = patientSurveyService.getAllPatientSurveys();
        surveyPromise.then(function(promise) {
            $scope.surveyData = promise.data;
        });
        console.debug("At end of patientSurveyController.getAllPatientSurveys()...");
        console.debug($scope.surveyData);
        console.debug("test");
    };

    /**
     *
     */
    $scope.getAllSites = function() {
        console.debug("patientSurveyController.getAllInstitutions()...");
        var sitePromise = patientSurveyService.getAllSites();
        //TODO
        console.debug("At end of patientSurveyController.getAllInstitutions()...");
    };

    $scope.logout = function() {
        console.debug("Logout of dashboard...");
        //TODO
    };

}).controller('physicianSurveyController', function($log, $scope, patientSurveyService){
    //TODO
});