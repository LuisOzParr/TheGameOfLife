Juego de la vida / The Game of Life
===
¿Que es el juego de la vida?
----------------------------

Es un "autómata celular" propuesto por el matemático John H. Conway en 1970. Consiste en una matriz, donde cada celda puede tomar uno de dos valores: "viva" o "muerta", dependiendo de unas ciertas reglas.

Reglas
------

1. Se cuentan cuántas células vivas hay en los ocho vecinos cercanos (cero si no hay vecinos, ocho si toda la vecindad está ocupada).

2. Si la celda está viva, permanece viva sólo si tiene dos o tres vecinos (si hay uno o ninguno, se muere; si hay cuatro o más, también muere).

3. Si la celda está muerta y tiene exactamente tres vecinos, nace una célula nueva (si hay otro número de vecinos, permanece muerta).

Mas info: https://www.investigacionyciencia.es/blogs/fisica-y-quimica/34/posts/el-juego-de-la-vida-11499

Implementacion
===

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
            }, 50)
        }
    
        //Iniciamos el loop infinito
        myLoop();
    
    });
