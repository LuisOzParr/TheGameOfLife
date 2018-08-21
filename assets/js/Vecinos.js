var Vecinos = function (x,y,matrix, matrixSize) {

    this.x = x;
    this.y = y;

    var totalVecinosVivos = 0;

    this.getTotalVecinos = function () {
        totalVecinosVivos = 0;
        for(var i = -1; i<=1; i++){
            for (var j = -1; j<=1; j++){
                if(this.existeVecino(x+i, y+j)) totalVecinosVivos++;
            }
        }
        return totalVecinosVivos;
    };

    this.existeVecino= function(x,y){
        return !!( !this.esMismaCordenada(x, y) && this.existeCordenada(y) && this.existeCordenada(x) && matrix[y][x] === 1);

    };

    this.existeCordenada = function(cordenada){
        return cordenada >= 0 && cordenada <= matrixSize-1;
    };

    this.esMismaCordenada = function(x,y){
        return x === this.x && y === this.y;

    }



};