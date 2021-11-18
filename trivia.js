function datos(){
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var años = document.getElementById("años").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var condiciones = document.getElementById("condiciones").checked;

    var mensaje = "Nombre:" + nombres
    +"\nApellidos:" + apellidos
    +"\nCorreo:" + correo
    +"\nEdad:" + años
    +"\nEs mujer:" + f
    +"\nEs hombre:" + m
    +"\nCondiciones:" + condiciones;
    console.log(mensaje)
}
function funciona(){
    console.log("esto funciona");
}
var pregunta = ["¿Quién pintó la Mona Lisa?",
"¿Quien pinto El jardin de las delicias?",
"¿Cuál es el primer elemento de la tabla periódica?",
"¿Cuál es la edad del universo?",
"¿Cuál es el país mas poblado del mundo?",
"¿Cuántos continentes tiene la tierra?",
"¿Cuánto dura un partido de fútbol?",
"¿Cuándo se celebró el primer mundial de futbol?",
"¿Qué representa el anillo de Green Lantern?",
"¿Donde vivia Dumbo?"]

var opciones = [["Leonardo da Vinci",
"Picasso",
"Leonardo DiCaprio",
"Monet"],

["Picasso",
"El Bosco",
"Velasquez",
"Dalir"],

["Cobalto",
"Titanio",
"Hidrógeno",
"Magnesio"],

["12 mil millones de años",
"10 mil millones de años",
"14 mil millones de años",
"13 mil millones de años"],
["Rusia",
"India",
"China",
"China"],
["4","5","6","7"],
["90 minutos",
"120 minutos",
"60 minutos",
"80 minutos"],
["El 13 de julio de 1930",
"El 20 de junio de 1930",
"El 15 de agosto de 1930",
"El 25 de mayo de 1930"],
["Fuerza de voluntad",
"Capacidad de crear manifestaciones",
"Una arma poderosa",
"Teletrasnportación"],
["Circo", 
"Londres",
"Estados Unidos",
"Granja"]]

var puntajeporopcion =[
    [2,0,0,0],
    [0,2,0,0],
    [0,0,2,0],
    [0,0,0,2],
    [0,0,2,0],
    [0,0,2,0],
    [0,2,0,0],
    [2,0,0,0],
    [0,2,0,0],
    [2,0,0,0]
]
var puntaje = 0;
var i=0;

function mostrarResultado(){
    var div = document.getElementsByClassName("respuesta")[0]
    div.innerHTML ="";
    document.getElementById("barra-progreso").value=(i*100)/(pregunta.length -1);
var puntaje = 20;
console.log(puntaje);

div.innerHTML = "<h1 class='resultado-titulo'>Resultados</h1>";
if(puntaje<=10){
    rendimiento = "<span id='estilo-perdiste'>PERDISTE</span>";
    console.log("Perdiste");
 }else if(10<puntaje&&puntaje<=14){
    rendimiento = "<span id='estilo-casilologras'>CASI LO LOGRAS</span>";
     console.log("Casi lo logras");
 }else if(puntaje===20){
    rendimiento = "<span id='estilo-lolograste'>LO LOGRASTE</span>";
     console.log("Lo lograste");
 }else{
    rendimiento = "<span id='estilo-cerca'>CERCA</span>";
     console.log("cerca");
 }
 div.innerHTML += `<p class = "resultado-obtenido">Obtuviste ${puntaje} puntos, lo cual significa que ${rendimiento}.</p>`
}
  
 function actualizarPuntaje(opcion){
    var indice = opcion - 1;
    if(i<pregunta.length){
        puntaje += puntajeporopcion[i][indice];
        siguientePregunta();
    }else{
        mostrarResultado();
    }
    }
    function siguientePregunta(){
        document.getElementById("pregunta").innerHTML = pregunta[i];
        document.getElementById("btn1").innerHTML = opciones[i][0];
        document.getElementById("btn2").innerHTML = opciones[i][1];
        document.getElementById("btn3").innerHTML = opciones[i][2];
        document.getElementById("btn4").innerHTML = opciones[i][3];
        
        document.getElementById("barra-progreso").value =i*100/ pregunta.length;
        i++;
    }
    siguientePregunta();
    document.getElementById("btn1").addEventListener("click", function(){actualizarPuntaje(1)});
    document.getElementById("btn2").addEventListener("click", function(){actualizarPuntaje(2)});
    document.getElementById("btn3").addEventListener("click", function(){actualizarPuntaje(3)});
    document.getElementById("btn4").addEventListener("click", function(){actualizarPuntaje(4)});