var Celulas = function(matrixSize) {
    var matriz = [];
    var matrizPivote = [];

    crearMatriz = function() {
        for(var x = 0; x<matrixSize; x++){
            matriz[x] = [];
            for(var y = 0; y<matrixSize; y++)
                matriz[x][y] = Math.round(Math.random());
        }
    };
    
    crearMatriz();

    this.getMatrizPivote = function(){
        return matrizPivote;
    };
    this.getMatriz = function(){
        return matriz;
    };



    this.print = function(matrix){
        $('#matriz').html('');

        for(var y = 0; y<matrixSize; y++){
            tr = $('<tr></tr>');
            for(var x = 0; x<matrixSize; x++){
                tr.append($('<td class="celula'+matrix[y][x]+'"> </td>'))
            }
            $('#matriz').append(tr);
        }
    };

    var createPivotMatrix = function(){
        for(var x = 0; x<matrixSize; x++){
            matrizPivote[x]=[];
            for(var y = 0; y<matrixSize; y++){
                var vecinos = new Vecinos(y,x,matriz, matrixSize);
                matrizPivote[x][y] = vecinos.getTotalVecinos();
            }
        }
    };

    this.crearMatrizNueva = function () {
        createPivotMatrix();
        var matrizBuffer = [];
        for(var y = 0; y<matrixSize; y++){
            matrizBuffer[y]=[];
            for(var x = 0; x<matrixSize; x++){
                matrizBuffer[y][x] = vivaOmuerta(matriz[y][x],matrizPivote[y][x]);
            }
        }
        matriz = matrizBuffer;
    };


    var vivaOmuerta = function (estado, cantidadVecinos){

        if(estado === 1){
            if( cantidadVecinos === 2 || cantidadVecinos === 3)
                return 1;
        }else{
            if(cantidadVecinos === 3)
                return 1;
        }
        return 0;
    }

};