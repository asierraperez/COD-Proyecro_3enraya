function estado_tablero(tablero) {
    var contador = 0
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero.length; j++) {
            if (tablero[i][j] != "-") {
                contador++
            }
        }

    }
    if (contador == 9) {
        return true
    } else {
        return false
    }
}