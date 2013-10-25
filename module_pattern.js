/**
 * Module pattern:
 * @seealso namespace pattern
 */
MYAPP.namespace('MYAPP.modules.testModule');

MYAPP.modules.testModule = (function(){
	//private property:
	var name = 'testModule';
	var Constr;
	
	Constr = function(){
		this.sayHello = function(){
			console.log('Hello, I am a module! My name is: ' + this.toString());
		};
		
		this.toString = function(){
			return name;
		}
	}
	
	return Constr;
}());

//Usage Example:
var module = new MYAPP.modules.testModule();
module.sayHello();
