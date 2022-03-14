function Inicia_tablero(fila, columna) {
    var tablero_inicial = []
    for (let i = 0; i < fila; i++) {
        tablero_inicial[i] = []
        for (let j = 0; j < columna; j++) {
            tablero_inicial[i][j] = "-"
        }
    }
    return tablero_inicial
}