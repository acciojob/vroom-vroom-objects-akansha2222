// Complete the js code
function Car(make, model) {
	function getMakeModel()
		{
		this.make = make
		this.model = model
		}
		Car.prototype.getMakeModel = function()
		{
			return this.make + " " + this.model
		}
}

function SportsCar(make, model, topSpeed) {
		this.make = make
		this.model = model
	this.topSpeed = topSpeed
	
}
SportsCar.prototype = Object.create(Car.prototype)


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

SportsCar.prototype.getTopSpeed = function name(params) {
	return this.TopSpeed 
}
