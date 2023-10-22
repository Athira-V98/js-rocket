var changeText = function(){
	document.getElementById('acomaf').className = 'text change';
}

var changePicture = function() {
	document.getElementById('picture').src='night.jpg'
	document.getElementById('image').src='sunset.jpg' 

} 

/* here the div class named "cool" with id "learn" was changed to "cool red" */

var doCoolStuff = function() {
	
	  var currentClassName = document.getElementById('learn').className;

	  if (currentClassName == 'cool') {
		document.getElementById('learn').className = 'cool red';
	} else {
		document.getElementById('learn').className = 'cool'
	};
};


var sayMyName = function(name) {
       alert('My Name is: '+name);
}

var car = {
	make: 'Tesla',
	type: 'X',
	color: 'matte black',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4',
	],
	turnOn: function() {
		this.isTurnedOn = true;
},
	fly: function(){
		alert('fly');
},
	switchCar: function (isOn) {
		console.log('turn car '+isOn)
	;
	if (isOn == true) {
		this.isTurnedOn = true;
	} else {
		this.isTurnedOn = false;
	}

  },
};