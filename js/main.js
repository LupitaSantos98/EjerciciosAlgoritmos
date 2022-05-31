//Algoritmos
//1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor
let n1 = parseFloat(prompt("Ingresa el primer número entre el 1 y el 100"));
let n2 = parseFloat(prompt("Ingresa el segundo número"));
let n3 = parseFloat(prompt("Ingresa el tercer número"));

if((n1 >= 1) && (n1 <= 100) && (n2 >= 1) && (n2 <= 100) && (n3 >= 1) && (n3 <= 100)){
    if((n1 >= n2) && (n1 >= n3)){
        alert("El número mayor es: " + n1);
    }else if((n2 >= n1) && (n2 >= n3))
    {
      alert("El número mayor es: " + n2);
    }else if((n3 >= n1) && (n3 >= n2)){
      alert("El número mayor es: " + n3);
    }
}else{
    alert("Vuelve a ingresar los números");

}

//2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres 
n1 = parseFloat(prompt("Ingresa el primer número entre el 1 y el 100")); 
n2 = parseFloat(prompt("Ingresa el segundo número"));
n3 = parseFloat(prompt("Ingresa el tercer número"));

if((n1 >= 1) && (n1 <= 100) && (n2 >= 1) && (n2 <= 100) && (n3 >= 1) && (n3 <= 100)){
    if((n1 < n2) && (n1 < n3)){
        alert("El número menor es: " + n1);
    }else if((n2 < n1) && (n2 < n3))
    {
     alert("El número menor es: " + n2);
    }else if((n3 < n1) && (n3 < n2)){
      alert("El número menor es: " + n3);
    }
}else{
   alert("Vuelve a ingresar los números");

}

//3. Realizar un algortimo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
/*function adivinaElNumero(){
    alert("Piensa un número entre el número 1 y el 100");
    let l = 1;
    let r = 100;
    let medio;
    while(r >= 1 && l <101){
        medio = l + Math.floor((r-l)/2);//3
        if(confirm(`Tu número es ${medio}?`))//numerosDonde=6
            return medio;

        if(confirm(`Tu número es menor a ${medio}?`))
            r = medio - 1;
        else
            l = medio + 1;//4
        console.log(l,r,medio)
    }
  return -1;

}
function tuNumeroEs(){
    const NumeroAdivinado = adivinaElNumero();
    NumeroAdivinado === -1 ? alert("Hiciste trampa brou, tu número no está en el rango especificado"):alert("Tu número es " + NumeroAdivinado);
}
tuNumeroEs();*/

function adivinar(){
	let superior = 100;
	let inferior = 0;
	let noEncontrado = true;
	while(noEncontrado){
		let mid = parseInt( inferior + ((superior-inferior)/2));
		if(((superior-inferior)/2)<1){
			noEncontrado = false;
			alert("Tu número es el "+(parseInt(mid)+1));
			break;
		}
		let res = confirm("Tu número es menor o igual a "+ mid);
		if(res){
			superior=mid;
		}else{
			inferior=mid;
		}
	}
}
adivinar();


//4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
let n = parseFloat(prompt("Ingresa el un número entre el 100 y el 200")); 
if((n >= 100) && (n <= 200)){
    if(n%3==0){
        alert("Es múltiplo de 3");
    }else{
        alert("No es múltiplo de 3");
    }
}else{
    alert("Vuelve a ingresar el número");
}

//5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let num3 = parseFloat(prompt("Ingresa el tercer número: "));
if(num1==(num2+num3)){
    alert("El número: " + num1 + " es la suma de: " + num2 + " y " + num3);
}else if(num2==(num1+num3)){
    alert("El número: " + num2 + " es la suma de: " + num1 + " y " + num3);
} else if(num3==(num1+num2)){
    alert("El número: " + num3 + " es la suma de: " + num1 + " y " + num2);
}else{
   alert("Ninguno es la suma de los otros números");
}

//6. Elabora un algoritmo para leer un número y determinar si es par o impar 
let nu = parseFloat(prompt("Escribe un número para determinar si es par o impar: "));
if(nu%2==0){
    alert("Es un número par");
}else{
    alert("Es un número impar");
}