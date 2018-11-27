/*var users =['user1','user2','user3','user4','user5'];
users.forEach(function(user){
	console.log(user)
})

users.push("user6");
console.log(users);

users.pop();
console.log(users);
users.unshift("user0");
console.log(users);
users.shift();
console.log(users);
users.splice(1,0,"user01");
console.log(users);

*/

/**/
/*function reverseString(str) {var s = "hello"
var m = 'hello'

console.log(s);

var username="bunny";
console.log(username.length);
console.log(username.italics());
console.log(username.bold());
console.log(username.strike());
console.log(username.anchor("google"));


var line ="hello! how are you ";
console.log(line.startsWith("hello"));
console.log(line.endsWith("you"));
console.log(line.includes("youare"));
console.log(line.toUpperCase());
*/
var abc="prathyusha";
    function reverseString( str ){
	var str1 = str.split(''); 
	str1.reverse();
	var str2  = str1.join(''); 
	return str2;
}
	console.log(reverseString(abc));

var user = "hello! how are you";

function reversestring(str) {
    var name = str.split("");
    name.reverse();
    var result = name.join("");
    return result;
}
console.log(reversestring(user));


    
