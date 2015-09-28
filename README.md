# CM - Customer Management

> CM is an application based on [angularJS](https://angularjs.org/) framework and [Dexie](http://www.dexie.org) IndexedDB wrapper

---

* [Installation](#installation)
* [Development](#development)
* [Testing](#testing)

---


<a name="installation"></a>
# Installation
Clone/download the repository and run 

	npm install
	
inside the root directory. The website document root resides in `app/` in case that the website should configured to be served through a web server. 

To run the application in production mode, it should be bundled: 

	npm run build

<a name="development"></a>
# Development
The application comes with a bundled light live reload server:

	npm run serve
	
The dependencies are managed using [JSPM](http://jspm.io/) package manager. 
The code is written in ES6 syntax and transpired runtime by [babelJS](babeljs.io). Module loading (including ES6 modules) provided by [SystemJS](https://github.com/systemjs/systemjs).

If the application was build, it will load the JS modules from the bundle, skipping the source code. To unbundle run

	npm run unbuild

<a name="testing"></a>
# Testing
Karma + Jasmine.

To run tests simply run

	nom run test
	

