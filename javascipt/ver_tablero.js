function ver_tablero(tablero) {
    var aux_ver_tablero = tablero
    var tabla_ver_tablero = ""
    for (let i = 0; i < aux_ver_tablero.length; i++) {
        for (let j = 0; j < aux_ver_tablero[i].length; j++) {
            tabla_ver_tablero = tabla_ver_tablero + aux_ver_tablero[i][j] + " "
        }
        tabla_ver_tablero = tabla_ver_tablero + "\n"
    }
    return tabla_ver_tablero
}