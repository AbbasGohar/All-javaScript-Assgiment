// 1.
var a,b,c

// 2. "CASE SENSITIVE"
// LEGAL
// letters,numbers,dollar sign,underscore 
var _Gohar;
var Gohar_Abbas;
var userName;
var Ali;
var num1;


// ILLEGAL
// spaces,keyword,number could not in start,any special character except of $ and _ 
// var Gohar Abbas;
// var 14Ali;
// var @aAli;
// var var;
// var ali 12324;


// 3.
document.write("<h1>"+ "Rules for naming JS variables"  +"</h1>");
document.write("<p>"+ "Variable names can only contain numbers, $ and _ . For example $my_1stVariable" +"</p>");
document.write("<p>"+"Variables must begin with a letter,$ or _ . For example $name, _name or name"+"</p>");
document.write("<p>"+"Variable names are case sensitive"+"</p>");
document.write("<p>"+"Variable names should not be JS keywords"+"</p>");