/**
 * Allows to create 'static' members. 
 */
var Person = function(namestr) {
	this.name = namestr;
};

//a static method:
Person.sayBye = function(){
	console.log('Bye!')
}

//non-static(object-specific) method:
Person.prototype.sayHi = function(){
	console.log('Hi! I am ' + this.name);
}


var jack = new Person('Jack');
jack.sayHi();
Person.sayBye();
