function main() {

    var ganar = false
    var resultado = ""
    var repetir = true
    var contador
    var casillas = document.getElementsByClassName("casillas")
    var contador = 0
    var tablero = Inicia_tablero(3, 3)
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].addEventListener("click", (evt) => {
            if (!ganar) {
                if (contador % 2 == 0) {
                    tablero = jugador1(tablero, i)
                    contador++
                    ganar = comprobar_ganador(tablero, contador)
                } else {
                    tablero = jugador2(tablero, i)
                    contador++
                    ganar = comprobar_ganador(tablero, contador)
                }
            }
            if (ganar) {
                for (let j = 0; j < casillas.length; j++) {
                    casillas[j].removeEventListener("click", (evt))
                    repetir = confirmar("volver a jugar")
                    if (repetir) {
                        location.reload()
                    }
                }
            }
        })

    }

}
main()