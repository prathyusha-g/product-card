

var AC={
	brand : "Bajaj",
	color : "white",
	price : 65000,
 guarentee: "4 yrs",
	currentState:false,
	minTemperature:16,
	maxTemperature:27,
	initialTemperature:23,
	mode :heat,
	onOff:function(){
		if(this.currentState == false){
			this.currentState =true;
		}
		else{
			(this.currentState=false);
		}
	},
	increase:function(){
		if(this.initialTemperature<=this.maxTemperature){
			this.maxTemperature++;
		}
	},
	decrease:function(){
		if(this.initialTemperature>=this.minTemperature){
			this.minTemperature--;
		}
		
	},
	acMode:function(choice){
		switch(choice){
			case "cool":this.mode=="cool";
			break;
			case "heat":this.mode=="heat";
			break;
			case "dry":this.mode="dry";
			break;

		},
	}
}
console.log(AC.currentState);
AC.onOff();
console.log(AC.currentState);
console.log(AC.brand);
console.log(AC.color);
console.log(AC.price);
AC.increase();
AC.decrease()
console.log(AC.minTemperature);
console.log(AC.mode);






























