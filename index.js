
//El prompt se usa para que el usuario ingrese un dato, podemos guardar
//este dato igualandolo a una variable.
/*const salary = prompt("Type your salary.")
const antiquity = prompt("Type your time working here.")
//alert("Your salary is: " + salary)

const salaryLessThanTwoThousand = Number(salary) < 2000
const timeWorkingMoreThanTenYears = Number(antiquity) == 10 || Number(antiquity)  >=  10;
const salaryAndTime = salaryLessThanTwoThousand && antiquity

console.log("Respuesta a 1.a"+salaryAndTime)

const antiquityLessThanTen = Number(antiquity) < 10
const timeAndSalary  =   salaryLessThanTwoThousand ||  antiquityLessThanTen
console.log("Ejercicio 2: " + timeAndSalary)


const salaryAlone = !salaryLessThanTwoThousand
console.log("ejer 3: "+salaryAlone)


//Ejercicio 1.b

//Compras mayores o  igual a los  100k

//Mostrar en cosola un booleano: descuento o no


const compras = prompt("Type the value of your buys: ")
const descuento  = Number(compras) >= 100000*/


//Ejercicio 1.c  Calculo de multiplo de 2 ----- Solucionado

/*let numero = prompt("Type a number: ")


if (numero % 2  === 0 ) {
    console.log("El numero ingresado SÍ es múltiplo de 2");
}
else{
    console.log("El número ingresado NO es múltiplo de dos");
} */

//////////////////////////////////////////////////////

//Ejercicio D - SOLUCINADO

/*//Un prompt que reciba nombre, salario por hora y numero de horas trabajadas

const employeeName = prompt("Type the employee name: ")
const salaryPerHour = prompt("Type the employee's salary per hour: ")
const hourWorkedNumber = prompt("Type the hours that the employee worked: ")


//D.1 Calcular salario mensual -  SOLUCIONADO
const monthSalary = salaryPerHour * hourWorkedNumber * 30

//D.2 Determinar si recibe o no transporte, solo si el salario mensual  es menor o igual a 700k
const getTransport = Number(monthSalary) <= 700000

//D.3 Mostrar en consola Nombre, salario basico mensual y si recibe o no subsidio - SOLUCIONADO

console.log("Employee's name: " + employeeName)
console.log("The basic month salary is: " + monthSalary)
if (getTransport == true) {
    console.log("This emplyee gets transportation subsidy")
} else {
    console.log("This employee doesn't get transportation subsidy")
}*/


//////////////////////////////////////////////////////

/*//Ejercicio E - SOLUCIONADO

//Un algoritmo que reciba una letra del abecedario y que valide si es vocal o no.

var letter = prompt("Type a letter: ")

letter = letter.toLowerCase();

if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    console.log("This letter is a vowal");
} else {
    console.log("This letter is not a vowal");
}*/


//////////////////////////////////////////////////////

/*// Ejercicio F - SOLUCIONADO

//Aeropuerto requiere un programa que brinde info  a los turistas de donde está salida,
//recibiendo un digito de pasaporte
//Los de la letra A son nacionales
const passportNumber = prompt("Type your passport number: ")

var firstData = passportNumber.charAt(0);
firstData = firstData.toLowerCase();


if (firstData === 'a'){
    console.log("Este pasaporte es Nacional (" + true + ")")
} else {
    console.log("Este pasaporte es Extranjero (" + false + ")")
}*/

//////////////////////////////////////////////////////

/*//Ejercicio 2 -  SOLUCIONADO

const a = 4
const b = 7
const c = 2*b
const x = a
const y = 3*x
const u = 6
const w = 10
const z = 5

// 2.a
const resultA = a/(b*c)
console.log("2.a result= " + resultA)

// 2.b
const resultB = (a^2)+(b^92)
console.log("2.b result= " + resultB)

//2.c
const resultC = (x+y)/(u+(w/a))
console.log("2.c result= "+ resultC)

//2.d
const resultD  = x/y*(z+w)
console.log("2.d result= " + resultD)*/


//////////////////////////////////////////////////////

//Ejercicio 3

//Tablas de verdad.

const table = [
    { p: true, q: true },
    { p: true, q: false },
    { p: false, q: true },
    { p: false, q: false }
]

/*console.log("p   | q      | NOT p   | NOT p AND q");

for (const row of table) {

    //Aplicamos la logica de si existe o no el valor P en  cada fila de la tabla
    const notP = !row.p;
    
    //Aplicamos la logica de si no existe P, pero sí existe q en cada fila de la tabla
    const result = notP && row.q;
  

    //se imprime cada resultado
    console.log(`${row.p} | ${row.q} | ${notP} | ${result}`);
  }*/


console.log("p   | q        | NOT p   | NOT q   | NOT p AND NOT q")

for (const row of table) {

    const notP = !row.p

    const notQ = !row.q

    const notPAndNotQ = notP && notQ


    console.log(`${row.p} | ${row.q}    | ${notP}   | ${notQ}   | ${notPAndNotQ}`)

}

