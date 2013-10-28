/**
*An example of multiple inheritance using multiple constructors.
*A child inherits all the parent's props by copying them.
*Nothing from the prototype gets inherited..
**/
function Cat() {
	this.legs = 4;
	this.say = function(){
		return 'meow';
	};
};

function Bird(){
	this.legs = 2; //duplicate property (the last one wins)
	this.wings = 2;
	this.fly = true;
}

function CatWings(){
	Cat.apply(this);
	Bird.apply(this);
}

var catBird = new CatWings();

console.dir(catBird);