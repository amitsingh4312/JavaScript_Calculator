var $ = function (id) { return document.getElementById(id); };

window.onload = function () {

    $("b0").onclick = displayzero;
    $("b1").onclick = displayone;
    $("b2").onclick = displaytwo;
    $("b3").onclick = displaythree;
    $("b4").onclick = displayfour;
    $("b5").onclick = displayfive;
    $("b6").onclick = displaysix;
    $("b7").onclick = displayseven;
    $("b8").onclick = displayeight;
    $("b9").onclick = displaynine;
    $("bDot").onclick = displaydot;
    $("bAddition").onclick = addNumbers;
    $("bEquals").onclick = equalsTo;
    $("bClear").onclick = clearAll;;
    $("bBackspace").onclick = clearOne;
    $("bModulus").onclick = modulus;
    $("bSin").onclick = sine;
    $("bCos").onclick = cosine;
    $("bTan").onclick = tangent;
    $("bMultiply").onclick = multiply;
    $("bSquareRoot").onclick = squareRoot;    
    $("bMinus").onclick = subtractNumbers;
    $("bPi").onclick = pi;
    $("bExponent").onclick = exponent;
    $("bLeftParanthesis").onclick = lpar;
    $("bRightParanthesis").onclick = rpar;
    $("bPlusMinus").onclick = plsmns;
    $("bDivide").onclick = divide;
    $("bLog").onclick = logarithm;
    $("bRaiseToThePower").onclick = raisepow;
};

var flag = 0;

var displayzero = function(){
    if(flag==0){
        $("answer").value += 0;
    }else{
        $("answer").value = "";
        $("answer").value += 0;
        flag = 0;
    }
}
var displayone = function(){
    if(flag==0){
        $("answer").value += 1;
    }else{
        $("answer").value = "";
        $("answer").value += 1;
        flag = 0;
    }
}
var displaytwo = function(){
    if(flag==0){
        $("answer").value += 2;
    }else{
        $("answer").value = "";
        $("answer").value += 2;
        flag = 0;
    }
}
var displaythree = function(){
    if(flag==0){
        $("answer").value += 3;
    }else{
        $("answer").value = "";
        $("answer").value += 3;
        flag = 0;
    }
}
var displayfour = function(){
    if(flag==0){
        $("answer").value += 4;
    }else{
        $("answer").value = "";
        $("answer").value += 4;
        flag = 0;
    }
}
var displayfive = function(){
    if(flag==0){
        $("answer").value += 5;
    }else{
        $("answer").value = "";
        $("answer").value += 5;
        flag = 0;
    }
}
var displaysix = function(){
    if(flag==0){
        $("answer").value += 6;
    }else{
        $("answer").value = "";
        $("answer").value += 6;
        flag = 0;
    }
}
var displayseven = function(){
    if(flag==0){
        $("answer").value += 7;
    }else{
        $("answer").value = "";
        $("answer").value += 7;
        flag = 0;
    }
}
var displayeight = function(){
    if(flag==0){
        $("answer").value += 8;
    }else{
        $("answer").value = "";
        $("answer").value += 8;
        flag = 0;
    }
}
var displaynine = function(){
    if(flag==0){
        $("answer").value += 9;
    }else{
        $("answer").value = "";
        $("answer").value += 9;
        flag = 0;
    }
}
var displaydot = function(){
    if(flag==0){
        $("answer").value += ".";
    }else{
        $("answer").value = "";
        $("answer").value += ".";
        flag = 0;
    }
}
var addNumbers = function(){
    $("answer").value += "+";
    flag = 0;
}
var equalsTo = function(){
    try {
        var errorString = $("answer").value;
        var enteredValue = $("answer").value;
        enteredValue = enteredValue.replace('^','**');
        if (enteredValue.includes("%")) {
            if(enteredValue.slice(-1)=="%"){
                // alert("Hiii");
                enteredValue = enteredValue.replace('%','/100');
            }else{
                // alert("hola");
                enteredValue = enteredValue.replace('%','/100*');
            }
        };
        if (enteredValue.includes("(")) {
            var position = enteredValue.indexOf("(");
            if(enteredValue.charAt(position-1)=="0"||enteredValue.charAt(position-1)=="1"||enteredValue.charAt(position-1)=="2"||enteredValue.charAt(position-1)=="3"||enteredValue.charAt(position-1)=="4"||enteredValue.charAt(position-1)=="5"||enteredValue.charAt(position-1)=="6"||enteredValue.charAt(position-1)=="7"||enteredValue.charAt(position-1)=="8"||enteredValue.charAt(position-1)=="9"){
                enteredValue = enteredValue.replace('(','*(');
                // alert(position + "hi");   
            }
             //alert(position);
            }
        var result = parseFloat(eval(enteredValue).toFixed(8));
        console.log(enteredValue);
        console.log(result);
        $("answer").value = result;    
        flag = 1;
    } catch (error) {
        $("answer").value = "";
        $("answer").setAttribute("placeholder","\'"+errorString+ "=\' is SYNTAX ERROR! please try again!");
        console.log(error);
        flag = 1;
    }
    
}
var clearAll = function(){
    $("answer").value = "";
    $("answer").setAttribute("placeholder","Enter a Value");
    flag = 0;
}
var clearOne = function(){
    $("answer").value = $("answer").value.slice(0, -1);
    flag = 0;
}
var modulus = function(){
    $("answer").value += "%";
    flag = 0;
}
var sine = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").setAttribute("placeholder","Enter a value First");
    }else{
    temp=(parseFloat(Math.sin(temp)).toFixed(8));
    $("answer").value=temp;
    }
    flag = 1;
}
var cosine = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").setAttribute("placeholder","Enter a value First");
    }else{
    temp=(parseFloat(Math.cos(temp)).toFixed(8));
    $("answer").value=temp;
    }
    flag = 1;
}
var tangent = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").setAttribute("placeholder","Enter a value First");
    }else{
    temp=(parseFloat(Math.tan(temp)).toFixed(8));
    $("answer").value=temp;
    }
    flag = 1;
}
var multiply = function(){
    $("answer").value += "*";
    flag = 0;
}
var squareRoot = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").setAttribute("placeholder","Enter a value First");
    }else{
    temp=parseFloat(Math.sqrt(temp).toFixed(8));
    $("answer").value=temp;
    }
    flag = 1;
}
var subtractNumbers = function(){
    $("answer").value += "-";
    flag = 0;
}
var pi = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").value = "3.14159265";
    }else{
    $("answer").value=parseFloat(eval(temp * 3.14159265)).toFixed(8);
    }
    flag = 1;
}
var exponent = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").setAttribute("placeholder","Enter a value First");
    }else{
    $("answer").value+="E";
    }
    flag = 0;
}
var divide = function(){
    $("answer").value += "/";
    flag = 0;
}
var plsmns = function(){
    var temp = $("answer").value;
    temp = temp * (-1);
    $("answer").value = temp;
    flag = 0;
}
var lpar = function(){
    $("answer").value += "(";
    flag = 0;
}
var rpar = function(){
    $("answer").value += ")";
    flag = 0;
}
var logarithm = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").setAttribute("placeholder","Enter a value First");
    }else{
    temp=(parseFloat(Math.log(temp)).toFixed(8));
    $("answer").value=temp;
    }
    flag = 0;
}
var raisepow = function(){
    var temp = $("answer").value;
    if(temp==""){
        $("answer").setAttribute("placeholder","Enter a value First");
    }else{
        $("answer").value+="^";
    }
    flag = 0;
}