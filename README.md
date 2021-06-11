# Overchange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development

Run a local development server with the default development environment.

### Development server
Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. Use the ` -c production` flag to use the environment variables.

#### Firebase emulators
The development environment for this project is set up to connect to a local session of the firebase emulators. To initialize the local emulator, make sure you have installed the firebase CLI and configured the Firebase Local Emulator Suite: [Firebase suite docs](https://firebase.google.com/docs/rules/emulator-setup). Start the emulators with `firebase emulators:start`.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Project structure

In general, there are three main folders within the app directory: core, modules and shared. Each directory has a specific role for the things that go in it.

### Core
The Core Module is where we want to put our shared singleton services. So the services that we want only one instance of while having them shared among multiple modules should live here.
* This module gets loaded with the app.
* Will contain singleton items - items that will be instantiated only once throughout the app or used in only one place.
* Will be imported only once by AppModule, no other feature module will import this module.
* A good example of an app-level component would be the navigation bar.


We do not want to put components used throughout the application inside of the Core Module. We have the Shared Module for that.

### Shared

The Shared Module is where we want everything to live that is shared throughout the application. Components, directives, guards, & pipes can all live in the Shared Module.
* Contains commonly used directives, pipes and components that are re-used and referenced by components of feature modules
* Imported by core module and other feature modules.
* Imports: CommonModule, RouterModule, FormsModule, ReactiveFormsModule, Material modules and other library modules.
* Declarations: components that will be re-used in different feature modules, i.e. HexadecimalCellEditorComponent.
* Exports: all imported and declared items.
* Providers: no services should be provided in this module.