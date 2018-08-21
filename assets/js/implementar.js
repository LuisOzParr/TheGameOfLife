$(document).ready(function(){

    //Creamos una matriz de células de 35x35
    var celulas = new Celulas(35);
    //Imprimimos la matriz inicial en un <tbody> con el id matriz
    celulas.print(celulas.getMatriz());

    //Función loop con delay de 50 milisegundos
    function myLoop () {
        setTimeout(function () {

            //Creamos la matriz nueva según las reglas de las células
            celulas.crearMatrizNueva();
            //Imprimimos la matriz nueva
            celulas.print(celulas.getMatriz());

            //Repetimos el proceso
            myLoop();
        }, 500)
    }

    //Iniciamos el loop infinito
    myLoop();

});

