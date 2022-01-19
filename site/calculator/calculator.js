/* AVISO: Para hacer la calculadora no se puede usar bajo ningún caso, el metodo eval()

● CALCULATOR

Haz una calculadora. Un único programa al que le pasarás uno o dos parámetros mediante "prompt". Los resultados 
deberían ser mostrados con 3 decimales como mucho (En caso que hubieran). El programa debe contemplar e informar 
al usuario en el caso de que este introduzca cualquier cosa que no sean números.

● Si el usuario introduce UN solo número, deberá mostrar SOLO su raíz cuadrada.

● Si introduce DOS números se mostrarán los resultados de la suma, resta, multiplicación y división de dichos valores.

● Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
 */


//Asks the user 2 numbers and converts the string value to a number if possible
let num1In = parseFloat(prompt("Introduce a number"), 10);
let num2In = parseFloat(prompt("Introduce another number (optional)"), 10);

let result = [];

//This fuction is the main calculator
function calculator(num1,num2) {
  if (isNaN(num1)){                                                                 //If the first input is not a number
    result.push("Introduce a valid NUMBER.");
  } else if (!(isNaN(num1)) && isNaN(num2)) {                                       //If the first input is a number but the 2nd is not
    result.push(`The square root of ${num1} is ${Math.sqrt(num1).toFixed(3)}`);
  } else {                                                                          //If both inputs are a number
    result.push(`The result of the sum is ${(num1 + num2).toFixed(3)}`);
    result.push(`The result of the rest is ${(num1 - num2).toFixed(3)}`);
    result.push(`The result of the multiplication is ${(num1 * num2).toFixed(3)}`);
    result.push(`The result of the divison is ${(num1 / num2).toFixed(3)}`);
  }
}

calculator(num1In,num2In);

alert(result.join(`\n`));


//SELF-NOTE: podría mirar de hacer el codigo más reducido pero así creo que se ve más claro