var jared = {
 "my name": {
 	name : "Jared Meade",
 	id : 11390216
 },

 baller : "Confirmed"
};


console.log(jared);

function multiply(x,y){
	return x*y;
}

console.log(multiply.toString());

//function factory

function makeMultiplier(multiplier){
	var myFunc = function (x){

		return multiplier *x;
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);

console.log(multiplyBy3(10));

function doOp(x, opz){
	return opz(x);
}

var result = doOp(5,multiplyBy3);

console.log(result);