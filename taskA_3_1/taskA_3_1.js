var btn = document.getElementsByClassName( "width btn"),
    clear = document.getElementsByClassName("width clear"),
    equal = document.getElementsByClassName("width equal"),
    screen = document.getElementById("Answer");
  
var num;
var lhs;
var op;
var Rhs;
var result;
var operands;
  function EnterNumber(num) {
       num=  screen.value += num;
  }

  function EnterOperator(operator) {
        screen.value += operator;
      op=operator;
    
  }


function EnterClear(){
                  screen.value = "";

    
}

function EnterEqual(){
switch (op) {
  case "+":
  operands = (screen.value).split('+');
 result =parseInt(operands[0]) + parseInt(operands[1]);
screen.value=result;
    break;
 
  case "-":
  operands = (screen.value).split('-');
 result =parseInt(operands[0]) - parseInt(operands[1]);
screen.value=result;
    break;
        
  case "*":
  operands = (screen.value).split('*');
 result =parseInt(operands[0]) * parseInt(operands[1]);
screen.value=result;
    break;
        case "/":
  operands = (screen.value).split('/');
 result =parseInt(operands[0]) / parseInt(operands[1]);
screen.value=result;
    break;
 
}
    
}
           
       