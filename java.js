
var mujer = document.getElementById("opcion1")
var hombre = document.getElementById("opcion2")
var nombre= document.getElementById("texto1")



function mtexto(){
    if(mujer = document.getElementById("opcion1").checked){
        alert("bienvenida ")
    }

    if(hombre = document.getElementById("opcion2").checked){
        alert("bienvenido " + nombre)
    }
}



clasificaciones = ["ana ","oswaldo","raul","cecilia","maria","antonio"]


console.log("clasificaciones " + "\n"+"posicion 1 :"+
clasificaciones[0]+ "\n"+"posicion 2 :"+ 
clasificaciones[2]+"\n"+ "posicion 3 :"+ 
clasificaciones[3] +"\n"+ "posicion 4 :"+ 
clasificaciones[4] + "\n"+"posicion 5 :"+
clasificaciones[5])


clasificaciones[3]="raul"

clasificaciones[2]="cecilia"



clasificaciones.pop();//eliminar ultima posicion


clasificaciones.unshift("martha"); //agregar primer puesto
clasificaciones.splice(2, 0, "Roberto", "Amaya");


console.log(clasificaciones)


console.log("clasificaciones " + "\n"+"posicion 1 :"+
clasificaciones[0]+ "\n"+"posicion 2 :"+ 
clasificaciones[1]+"\n"+ "posicion 3 :"+ 
clasificaciones[2] +"\n"+ "posicion 4 :"+ 
clasificaciones[3] + "\n"+"posicion 5 :"+
clasificaciones[4]+"\n"+ "posicion 6 :"+ 
clasificaciones[5] +"\n"+ "posicion 7 :"+ 
clasificaciones[6] +"\n"+ "posicion 8 :"+
clasificaciones[7] ) 



console.log("su area del ciculo es " + area)

numero = parseFloat(prompt("digite su numero "))

if(numero % 2 == 0){
    console.log("su numero es par ")
}

else{
    console.log("su numero es impar")
}


var numerorandom;

numerorandom = Math.random()*(1,100);
console.log(numerorandom)
if (numerorandom > 50 ){
    console.log("su numero random es mayor a 50");
}

else[
    console.log("su numero es menor a 50")
]

var lista = ["daryl","enoc","medrano","sanchez"]


var numbers = [1, 2, 3, 4, 5];

lista.forEach(function(lista){
    console.log(lista )
    if (lista === "medrano"){
        console.log("este es medrano")
    }
})

//Realice un programa que a
//través de la computadora se desea hacer la siguiente
//encuesta:





function calcularArea(){
var radio2 = document.getElementById("radio2").value
var Area = pi * Math.pow(radio2,2)

console.log("su resultado es " + Area)
}


function Voltaje(){
   var intensidad = document.getElementById("I").value
   var resistencia = document.getElementById("R").value
   var Voltaje = intensidad * resistencia
    var respuesta = document.getElementById("resultado")
    respuesta.innerHTML = Voltaje + " voltaje"
}