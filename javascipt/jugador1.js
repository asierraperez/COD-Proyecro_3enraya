function jugador1(tablero) {
    var aux_jugar_tablero1 = tablero
    var tabla1 = ver_tablero(aux_jugar_tablero1)
    var posicion = prompt(tabla1 + "\n\nJugador 1\nPulsa una tecla del pad numérico")
    posicion = parseInt(posicion)
    switch (posicion) {
        case 1:
            //i,j, nº de jugador
            aux_jugar_tablero1 = comprobar_posicion(2, 0, 1, aux_jugar_tablero1)
            break;
        case 2:
            aux_jugar_tablero1 = comprobar_posicion(2, 1, 1, aux_jugar_tablero1)
            break;
        case 3:
            aux_jugar_tablero1 = comprobar_posicion(2, 2, 1, aux_jugar_tablero1)
            break;
        case 4:
            aux_jugar_tablero1 = comprobar_posicion(1, 0, 1, aux_jugar_tablero1)
            break;
        case 5:
            aux_jugar_tablero1 = comprobar_posicion(1, 1, 1, aux_jugar_tablero1)
            break;
        case 6:
            aux_jugar_tablero1 = comprobar_posicion(1, 2, 1, aux_jugar_tablero1)
            break;
        case 7:
            aux_jugar_tablero1 = comprobar_posicion(0, 0, 1, aux_jugar_tablero1)
            break;
        case 8:
            aux_jugar_tablero1 = comprobar_posicion(0, 1, 1, aux_jugar_tablero1)
            break;
        case 9:
            aux_jugar_tablero1 = comprobar_posicion(0, 2, 1, aux_jugar_tablero1)
            break;
        default:
            alert("Jugador 1, numero no valido\nIntébtalo de nuevo")
            break;
    }
    return aux_jugar_tablero1
}