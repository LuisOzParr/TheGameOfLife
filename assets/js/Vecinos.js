var Vecinos = function (x,y,matrix, matrixSize) {

    var totalVecinosVivos;

    this.getTotalVecinos = function () {
        totalVecinosVivos = 0;
        totalVecinosVivos += this.getCantidadIzquierda(x,y);
        totalVecinosVivos += this.getCantidadCentro(x,y);
        totalVecinosVivos += this.getCantidadDerecha(x,y);

        return totalVecinosVivos;
    };

    this.getCantidadDerecha= function(x, y){
        var contador = 0;
        for (var i = -1; i<=1; i++){
            if(this.existeVecino(x+1, y+i))
                contador++;
        }
        return contador
    };
    this.getCantidadIzquierda= function(x, y){
        var contador = 0;
        for (var i = -1; i<=1; i++){
            if(this.existeVecino(x-1, y+i))
                contador++;
        }
        return contador;
    };
    this.getCantidadCentro= function(x, y){
        var contador = 0;
        if (this.existeVecino(x,y+1))
            contador++;
        if(this.existeVecino(x,y-1))
            contador++;
        return contador
    };

    this.existeVecino= function(x,y){
        if(this.existeCordenada(y) && this.existeCordenada(x) && matrix[y][x] === 1 ){
            return true;
        }
        return false
    };

    this.existeCordenada = function(cordenada){
        return cordenada >= 0 && cordenada <= matrixSize-1;
    }

};