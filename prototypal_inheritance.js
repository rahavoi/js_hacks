/*
 * Inheritance using prototype:
 */
function inherit(o){
	function F(){};
	F.prototype = o;
	return new F();
}

function Person(){
	this.name = 'papa';
}

Person.prototype.getName = function(){
	return this.name;
};

var papa = new Person();
var kid = inherit(papa);


console.log(kid.name);
console.log(kid.getName());