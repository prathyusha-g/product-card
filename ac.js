/*var AC={
  brand:"Bajaj",
  color:"white",
  price:65000,
  currentState:false,
  intialstage:23,
  mintem:16,
  maxtem:26,
  mode:"cool",
  onOff:function(){
  	if(this.currentState==false){
  		this.currentState =true;
  	}
  	else(this.currentState=false);
  },
  increase:function(){
  	if(this.maxtem >=this.intialstage){
  	   this.intialstage++;
  	}
  },
  decrease:function(){
  	if(this.mintem <=this.intialstage){
  		this.intialstage--;
  	}
  },
  	acMode:function(choice){
       switch(choice){
       case "A":this.mode='cool';
       break;
       case "B":this.mode='heat';
       break;
       case "C":this.mode='dry';
       break;
  	}
  },	
}

console.log(AC.brand);
console.log(AC.color);
console.log(AC.price);
console.log(AC.currentState);
AC.onOff();
console.log(AC.currentState);
console.log(AC.intialstage);
AC.increase();
console.log(AC.intialstage);
console.log(AC.intialstage);
AC.decrease();
console.log(AC.intialstage);
AC.decrease();
console.log(AC.intialstage);
console.log(AC.mode);
AC.acMode("B");
console.log(AC.mode);*/

var mobile={
	balance:10,
	loan:10,
	call:function(){

  	if(this.balance==0){
  		console.log("you cannot make a call");
  	}
  	else{
  		console.log("you can make a call");
  	}

  },
     lendingBalance:function(){
     	if(this.loan<=this.balance){
     		console.log("You have successfully recieved your loan as balance");
     	}
     	else{
     		console.log("You cannot access loan as balance.");
     	}
     }
	
}
console.log(mobile.balance);
mobile.call();
mobile.lendingBalance();

