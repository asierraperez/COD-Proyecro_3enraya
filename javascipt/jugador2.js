function jugador2(tablero, posicion) {
    var aux_jugar_tablero2 = tablero
    //var tabla2 = ver_tablero(aux_jugar_tablero2)
    //var tecla_pulsada = prompt(tabla2 + "\n\nJugador 2\nPulsa una tecla del pad numérico")
    //tecla_pulsada = parseInt(tecla_pulsada)
    switch (posicion) {
        case 0:
            //i,j, nº de jugador
            aux_jugar_tablero2 = comprobar_posicion(2, 0, 2, aux_jugar_tablero2, posicion)
            break;
        case 1:
            aux_jugar_tablero2 = comprobar_posicion(2, 1, 2, aux_jugar_tablero2, posicion)
            break;
        case 2:
            aux_jugar_tablero2 = comprobar_posicion(2, 2, 2, aux_jugar_tablero2, posicion)
            break;
        case 3:
            aux_jugar_tablero2 = comprobar_posicion(1, 0, 2, aux_jugar_tablero2, posicion)
            break;
        case 4:
            aux_jugar_tablero2 = comprobar_posicion(1, 1, 2, aux_jugar_tablero2, posicion)
            break;
        case 5:
            aux_jugar_tablero2 = comprobar_posicion(1, 2, 2, aux_jugar_tablero2, posicion)
            break;
        case 6:
            aux_jugar_tablero2 = comprobar_posicion(0, 0, 2, aux_jugar_tablero2, posicion)
            break;
        case 7:
            aux_jugar_tablero2 = comprobar_posicion(0, 1, 2, aux_jugar_tablero2, posicion)
            break;
        case 8:
            aux_jugar_tablero2 = comprobar_posicion(0, 2, 2, aux_jugar_tablero2, posicion)
            break;
        default:
            alert("Jugador 2, numero no valido\nInténtalo de nuevo")
            break;
    }
    return aux_jugar_tablero2
}