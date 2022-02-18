function comprobar_posicion(i, j, jugador, aux_tablero) {
    var aux_comprobar_tablero = aux_tablero
    if (aux_comprobar_tablero[i][j] == "-") {
        if (jugador == 1) {
            aux_comprobar_tablero[i][j] = "X"
        } else {
            aux_comprobar_tablero[i][j] = "O"
        }
    } else {
        alert("Jugador " + jugador + "\nPosicion ocupada, intentalo de nuevo")
    }
    return aux_comprobar_tablero
}
