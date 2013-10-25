/**
 * This pattern helps to make properties and methods private
 * using a closure.
 */

function Pojo(){
	//private property:
	var description = 'plain old js object';
	
	//private function:
	function isOld(){
		return true;
	}
	
	//public function:
	this.getDescription = function(){
		return description;
	}
	
	
	//accessing private functions from public method:
	this.printOld = function(){
		console.log('This object is old:' + isOld());
	}
}

var obj = new Pojo();
//test access to private member:
console.log('Private member:' + obj.description);

//test access to private member through public function:
console.log('Public function:' + obj.getDescription());

obj.printOld();