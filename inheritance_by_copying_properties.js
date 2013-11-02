/**
* An object gets functionality from another object by copying it.
**/


//Shallow copy:
function extend(parent , child){
	var i;
	
	child = child || {};
	for(i in parent){
		if(parent.hasOwnProperty(i)){
			child[i] = parent[i];
		}
	}
	
	return child;
}

//Deep copy:

function extendDeep(parent , child){
	var i = 0,
		toStr = Object.prototype.toString,
		astr = '[object Array]';
	
	child = child || {};
	
	for(i in parent){
		if(parent.hasOwnProperty(i)){
			if(typeof parent[i] ==='object'){
				child[i] = (toStr.call(parent[i]) === astr) ? [] :{};
			} else{
				child[i] = parent[i];
			}
		}
	}
	return child;
}