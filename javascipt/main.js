function main() {

    var ganar = false
    var resultado = ""
    var repetir = true
    var contador
    do {
        var contador = 0
        var tablero = Inicia_tablero(3, 3)
        do {
            tablero = jugador1(tablero)
            contador++
            ganar = comprobar_ganador(tablero, contador)
            if (!ganar & (contador < 9)) {
                tablero = jugador2(tablero)
                contador++
                ganar = comprobar_ganador(tablero, contador)
            }
        } while (!ganar & (contador < 9));
        resultado = ver_tablero(tablero)
        alert(resultado)
        repetir = confirmar("volver a jugar")
    } while (repetir);



}
main()