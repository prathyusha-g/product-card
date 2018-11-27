var phonenumber=988282868;
console.log(typeof phonenumber);
console.log(phonenumber);

var name="Prathyusha";
console.log(typeof name);
console.log(name);

var age=19;
if(age<18){
    console.log("Age is greater 18");
}
else{
    console.log("Age is lesser then 18");
}
var numchoco=[1,2,3,4,5];
console.log(typeof numchoco);
console.log(numchoco);

var mobile={
    color:"white",
    brand:"J7",
    price:200000,
    model:2018,
videocall:function(){
    console.log("Do Video call");
},
alarm:function(){
    console.log("Set alarm");
}
}
console.log(mobile.model);
console.log(mobile.brand);
mobile.videocall();
mobile.alarm();