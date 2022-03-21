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
        var ocupado = document.createElement("div")
        if (jugador == 1) {
            ocupado.innerHTML = "Jugador " + jugador + "<br/>Posicion ocupada,<br/>El turno pasa al jugador " + (jugador + 1)
            ocupado.style.color = "dodgerblue"
        } else {
            ocupado.innerHTML = "Jugador " + jugador + "<br/>Posicion ocupada,<br/>El turno pasa al jugador " + (jugador - 1)
            ocupado.style.color = "coral"
        }

        ocupado.style.fontSize = "0.75em"
        document.getElementsByTagName("h2")[0].appendChild(ocupado)
        ocupado.id = "ocupado"
        //alert("Jugador " + jugador + "\nPosicion ocupada, intentalo de nuevo")
    }
    return aux_comprobar_tablero
}
