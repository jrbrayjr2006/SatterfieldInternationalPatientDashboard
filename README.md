# SatterfieldInternationalPatientDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.

## Core Interactions
When a request is made by this front-end, a response is expected from the middle tier in the following format:

**Request**
```json
{
    id: ""
}
```

**Response**

```json
{
    id: "",
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
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Tailwind CSS Styling Dependencies

Install Tailwind CSS and PostCSS.

```sh
npm install tailwindcss @tailwindcss/postcss postcss --force
```

## Other Key Dependencies

```cmd
npm install -save rxjs
```

## Local Environment Setup

Install MongoDB locally to do full end-to-end testing locally.

### Install on MacOS

Refer to the [Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) guide for details, but abreviated installation steps are shown below:

```cmd
brew tap mongodb/brew

brew install mongodb-community@4.2
```

Start the MongoDB database using the following command: `mongod --config /usr/local/etc/mongod.conf`

Connect to the database via the command line via the `mongo` command to make sure the database is running.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Testing Dependencies

```sh
npm install cypress --save-dev
```

### Testing Caveats


### Testing with HttpClient

Services that use the HttpClient can be tested with the `HttpClientTestingModule`.

Import the testing module into the application's `app.module.ts` module.
```javascript
import { HttpClientTestingModule } from '@angular/common/http/testing';
...
...
  imports: [
    BrowserModule,
    HttpClientModule,
    ...
    ...
    HttpClientTestingModule,
    ...],
```

### Testing with Routes

Be sure to import the `RouterTestingModule` and the `RouterModule`.

```typescript
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
```

### PACT Test Dependencies

Add the following PACT development dependencies to the project.

```cmd
npm install @pact-foundation/pact-node --save-dev
npm install @pact-foundation/karma-pact --save-dev
npm install @pact-foundation/pact-web --save-dev
```

### PACT Modifications to Karma Configuration

Modify the `karma.conf.js` configuration file to include the PACT plugin.

```json
    plugins: [
      ...,
      ...,
      require('@pact-foundation/karma-pact')
    ],
    ...
    ...
    pact: [{
      cors: true,
      port: 1234,
      consumer: "survey-ui",
      provider: "surveyservice",
      dir: "pacts",
      spec: 2
    }],
    proxies: {
      '/survey-service/': 'http://127.0.0.1:1234/survey-service/'
    }
    ...
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## References

- [Install Tailwind CSS with Angular](https://tailwindcss.com/docs/installation/framework-guides/angular)
- [Creating a Consumer-Driven Contract with Angular and Pact](https://reflectoring.io/consumer-driven-contracts-with-angular-and-pact/)
- [Cypress Testing](https://docs.cypress.io/app/get-started/why-cypress)