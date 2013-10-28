/**
*An example of inheritance. Two patterns are used: constructor borrowing and 
*setting the child's prototype to point to a new instance of the parent constructor:
**/

//The parent constructor:
function Parent(name){
	this.name = name || 'Adam';
}

//adding functionality to the prototype:
Parent.prototype.say = function(){
	return this.name;
};

//The child constructor:
function Child(name){
	Parent.apply(this, arguments);
};

Child.prototype = new Parent();

var kid = new Child('Patrick');
console.log(kid.name);//Patrick
console.log(kid.say());//Patrick
delete kid.name;
console.log(kid.say());//Adam