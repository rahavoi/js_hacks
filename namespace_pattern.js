/**
 * This pattern helps to organize code using namespaces.
 */
var MYAPP = MYAPP || {};

MYAPP.namespace =  function(ns_string){
	var parts = ns_string.split('.'),
		parent = MYAPP,
		i
	
	//strip redundant leading global:
	if(parts[0] === 'MYAPP'){
		parts = parts.slice(1);
	}
	
	for(i = 0; i < parts.length; i++){
		//create a property if it does not exist:
		if(typeof parent[parts[i]] === 'undefined'){
			parent[parts[i]] = {}
		}
		
		parent = parent[parts[i]];
	}
	
	return parent;
};

//Usage example:
/*var module = MYAPP.namespace('app.modules.testmodule');
console.log(MYAPP);*/