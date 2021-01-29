

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

