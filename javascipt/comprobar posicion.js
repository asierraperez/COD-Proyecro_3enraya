function comprobar_posicion(i, j, jugador, aux_tablero, posicion) {
    var aux_comprobar_tablero = aux_tablero
    if (aux_comprobar_tablero[i][j] == "-") {
        var imagen = document.createElement('img')
        if (jugador == 1) {
            aux_comprobar_tablero[i][j] = "X"
            imagen.src = "svg/cruz.svg"
            imagen.alt = "Jugador 1"


        } else {
            aux_comprobar_tablero[i][j] = "O"
            imagen.src = "svg/circulo.svg"
            imagen.alt = "Jugador 2"


        }

        document.getElementsByClassName("casillas")[posicion].appendChild(imagen)


    } else {
        alert("Jugador " + jugador + "\nPosicion ocupada, intentalo de nuevo")
    }
    return aux_comprobar_tablero
}
