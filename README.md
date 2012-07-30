![BoilerplateJS - JavaScript Reference Architecture](https://github.com/ectechno/boilerplatejs/raw/master/themes/images/logo.jpg)

## Why did we write BoilerplateJS? ##

We made boilerplate.js to take the pain out of large scale Javascript/HTML5 product development. Boilerplate.js is a collection of product engineering patterns, and a solid integration of industry-leading Javascript frameworks.
It is NOT a website building tool OR a utility library solving just MVC. Boilerplate.js is your own startup code to kickstart next large-scale javascript product. It is just that we did some basic coding and library integrations to make your life easy!


## What's in it? ## 
BoilerplateJS addresses following concerns you will have in large-scale javascript development:

### How should I organize my solution structure? ###
Javascript product development involves dealing with lot of different javascript, css, html, and other file types. Some of these are your production code and some may be for your unit tests or build scripts. In your production code, you need to manage your third-party libraries, reusable classes, differnt product modules, plugins and templates. Based on established product development practices, BoilerplateJS proposes you a structure to manage your solution files.
 
### Can I do modular object oriented programming with plain javascript? ###
We love javascript as a language. When the dynamic functional language properties are combined with object oriented principles, the mix is really unmatched. In boilerplateJS, we use asynchronous module definition API (AMD API) for code unit encapsulation and dependency management. Each AMD module will have its private, public and static spaces, just like a traditional class file. These AMD modules may either define classes or data structures.

### My product suit has multiple product modules, how should I go about it? ###
Commonly product modules are a part of a larger product suit. Product suit architecture should support loading and managing of independent modules. Your modules may need the ability to interact but should be protected from failures of other modules. Each of the product module should operate in its own context (a private space), with limited knowledge of its parent context hierarchy.
 
### I'm building a single page app. What about bookmarking and browser history? ###
It is a very common requirement that specific business information and functionality be directly accessible via bookmarked URLs. It might not be trivial to add bookmarking and history support later, unless planed by the initial architecture. In addition, it is important that the browser 'back/forward' buttons behaving natural to your users.

### UI layer is going to be complex in my product. How should I design my UI components? ###
The secret of building a complex UI is not to build a complex UI! Your UI should preferably be a collection of loosely couples simple UI components. Each UI component should encapsulate a portion of total complexity, and expose well defined contract for other UI components to interact. To organize logic and content inside an UI component, BoilerplateJS uses MVVM pattern with strong bidirectional data binding.

### I'm writing durable product code. Can I UnitTest my javascript code? ###
Test driven development encourages you to write less coupled, cohesive code that is easy to change. BoilerplateJS comes with an ready to use integrated UnitTesting facilities. All core classes in the platform are fully covered with unit tests. Under existing unit tests, you will find best practices of mock, stub, assert, etc. which you may adapt in covering your own code.

### How should my loosely coupled modules interact with each other? ###
When bidirectional bindings are in place with MVVM pattern, all UI components that share a same view model instance will automatically be notified of each others operations. But what if you have two components that has no share view model needs some interactions? This is where BoilerplateJS 'mediator' assists you. It is a robust pub-sub implementation that let your components to listen to and raise client side events.

### How should I provide native language support for my users? ###
Native language support is two folds. In javascript based single page applications, UI rendering completely happens on the browser. Therefore the localization of UI components should also happen on the browser. BoilerplateJS let's you define localization resources per UI component, enabling you to structure and manage resource files effectively. It is even possible to change the css styles, images, etc. according to the language preferences of user's browser.


## What is in the recent BoilerplateJS Roadmap? ##
	* How can I optimize my code ready for deployment?
	* How do I ensure my application is mobile device friendly?
	* What are the different mechanisms of caching to improve response time to user?
	* How can I ensure the IP of the code I write is protected from theft?
	* How can I do documentation generation from the JS code I write?
	* How should I be doing client side logging for me to trace application behaviors?

