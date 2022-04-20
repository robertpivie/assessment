# Assessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Assessment

Programming Testing:

Write a method that takes a string argument and returns whether or not characters in the string have matching brackets. Meaning for every { there is a corresponding } bracket. Return true if they do, return false if they do not. 

Please unit test with the following use cases (and any others you choose to ensure functionality) - also, please be sure to show your unit tests:

Test string - Expected result
{} - True
}{ - False (closed bracket can't proceed all open brackets.)
{{} - False (one bracket pair was not closed)
"" - True. (no brackets in the string will return True) 
{abc...xyz} - True (non-bracket characters are ignored appropriately)
