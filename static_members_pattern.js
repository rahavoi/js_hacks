/**
 * Allows to create 'static' members. 
 */
var Person = function() {};

//a static method:
Person.sayHi(){
	console.log('Hi!');
}

//non-static(object-specific) method:
Person.prototype.sayBye(){
	console.log('Bye!')
}

