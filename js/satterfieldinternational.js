/**
 * Created by jamesbray on 8/20/16.
 */
console.debug("Entering satterfield international application...");

var app = angular.module('satterfieldinternational', ["ngRoute"]);

var urlPrefix = "/SatterfieldInternationalPatientDashboard";

var baseUrl = 'http://www.strawberry23.net:8080/satterfieldmedical';
//var baseUrl = 'http://www.docsatisfaction.com:8080/satterfieldmedical';
//var baseUrl = 'http://localhost:8080/satterfieldmedical';

app
    .config(function($routeProvider){
        console.debug("config");
        $routeProvider.when('/dashboard', {templateUrl: "/view/dashboard.html"})
            .when("/logout", {templateUrl: urlPrefix + "/index.html"})
            .when("/patient-dashboard", {templateUrl: urlPrefix + "/view/patient-dash.html"})
            .when("/physician-dashboard", {templateUrl: urlPrefix + "/view/physician-dash.html"})
            .when("/home", {templateUrl: urlPrefix + "/view/welcome.html"})
            .when("/institutions", {templateUrl: urlPrefix + "/view/institution.html"})
            .otherwise({templateUrl: urlPrefix + "/view/welcome.html"});
    })
    .factory('PatientSurvey', function($q, $http) {
        console.info("Entering factory...");
        var PatientSurvey = new Object();

        PatientSurvey.getAllPatientSurveys = function() {
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

        return PatientSurvey;
    })
    .factory('PhysicianSurvey', function($q, $http) {
        console.info("Entering PhysicianSurvey factory...");
        var PhysicianSurvey = new Object();

        PhysicianSurvey.getAllSurveys = function() {
            console.debug("Entering PhysicianSurvey.getAllSurveys...");
            var deferred = $q.defer();
            var serviceUrl = baseUrl + '/getallsurveys';
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
                $log.error('Service call failed while performing getAllSurveys function...');
                data = "{'message' : 'error'}";
                deferred.reject(data);
            });
            console.debug("Exiting PhysicianSurvey.getAllSurveys...");
            return deferred.promise;
        };

        return PhysicianSurvey;
    })
    .factory('Institutions', function($q, $http) {
        console.debug("Entering institutions factory...");
        var Institutions = new Object();

        Institutions.getAllInstitutions = function() {
            console.debug("Entering Institutions.getAllInstitutions()...");
            var deferred = $q.defer();
            var serviceUrl = baseUrl + '/sites';
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
                $log.error('Service call failed while performing getAllInstitutions() function...');
                data = "{'message' : 'error'}";
                deferred.reject(data);
            });
            console.debug("Exiting Institutions.getAllInstitutions()...");
            return deferred.promise;
        };

        return Institutions;
    })
    .service('patientSurveyService', function($http, $q, $log) {
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

        this.exportPatientDataToExcel = function() {
            console.debug("patientSurveyService.exportPatientDataToExcel()...");
            var deferred = $q.defer();
            var serviceUrl = baseUrl + '/exportpatienttoexcel';
            console.debug("The service url is " + serviceUrl);
            $http({
                method: 'GET',
                url: serviceUrl,
                headers: {'Content-Type': 'application/json'}
            }).
            success(function(response) {
                console.debug("Patient export to Excel successful...");
                deferred.resolve({data: response.data});
                data = response.data;
            }).
            error(function() {
                console.error("/exportpatienttoexcel service call failed...");
                $log.error('Service call failed while performing exportPatientDataToExcel function...');
                data = "{'message' : 'error'}";
                deferred.reject(data);
            });
            return deferred.promise;
        };

    })
    .service('physicianSurveyService', function($http, $q, $log) {
        console.debug("physicianSurveyService");
    })
    .controller('patientSurveyController', function($log, $scope, patientSurveyService, PatientSurvey, PhysicianSurvey, Institutions) {
        console.debug("Entering controller...");
        var survey = this;
        //$scope.institutions = [{organizationKey:'MCNI001',organizationName:'Mercy North Iowa',demo:'DEMO'}];
        $scope.appTitle = "Satterfield Services International";
        $scope.surveyData = patientSurveyService.initializeSurveys();
        $scope.patientSurveys = [];
        $scope.physicianSurveys = [];
        $scope.institutions = [{ "code" : "DEMO", "name" : "Demo Medical" }, { "code" : "SAMP", "name" : "Sample Hospital" }]
        $scope.addInstitutionFormData = {};
        $scope.test = "Satterfield Test";
        $scope.baseUrl = urlPrefix;

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

        $scope.exportPatientDataToExcel = function() {
            console.debug("patientSurveyController.exportPatientDataToExcel()...");
            var exportPatientPromise = patientSurveyService.exportPatientDataToExcel();
            exportPatientPromise.then(function(promise) {
                $scope.surveyData = promise.data;
            });
            //TODO
        };

        $scope.logout = function() {
            console.debug("Logout of dashboard...");
            location.href = 'login.html';
        };

        $scope.welcome = function() {
            console.debug("go to welcome screen");
            location.href = urlPrefix + "/admin.html#/home";
        }

        $scope.gotoInstitutions = function() {
            console.debug("go to welcome screen");
            location.href = urlPrefix + "/admin.html#/institutions";
        }

        PatientSurvey.getAllPatientSurveys().then(function(surveys) {
            $scope.patientSurveys = surveys.data;
        }, function(error) {
            console.error(error.message);
            $log.error(error.message);
        });
        /*
        Institutions.getAllInstitutions().then(function(institutions) {
            $scope.institutions = institutions;
        }, function(error) {
            console.error(error.message);
            $log.error(error.message);
        });
        */
    }).controller('physicianSurveyController', function($log, $scope, PhysicianSurvey){
        $scope.physicianSurveys = [];

        PhysicianSurvey.getAllSurveys().then(function(surveys) {
            $scope.physicianSurveys = surveys.data;
        }, function(error) {
            console.error(error.message);
            $log.error(error.message);
        });
    });