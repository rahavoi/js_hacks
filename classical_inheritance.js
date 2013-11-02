/*
 * "Classical" inheritance function using proxy constructor:
 * */

var inherit = (function (){
	var F = function(){};
	return function(C,P){
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	};
}());


function Parent(name){
	this.name = name || 'no name';
}

Parent.prototype.getName = function(){
	return this.name;
};

function Child(name){
	this.name = name || 'no name';
	Parent.apply(this, arguments);
};


inherit(Child, Parent);


var bob = new Child('Bob');


console.log(bob.getName());
console.dir(bob);