function main() {

    var ganar = false
    var tablero_lleno = false
    var repetir = document.getElementById("victoria")
    var contador
    var casillas = document.getElementsByClassName("casillas")
    var contador = 0
    var tablero = Inicia_tablero(3, 3)
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].addEventListener("click", (evt) => {
            if (!ganar) {
                if (document.getElementsByTagName("h2")[0].contains(document.getElementById("ocupado"))) {
                    document.getElementsByTagName("h2")[0].removeChild(document.getElementById("ocupado"))
                }
                if (contador % 2 == 0) {
                    tablero = jugador1(tablero, i)
                    contador++
                    tablero_lleno = estado_tablero(tablero)
                    ganar = comprobar_ganador(tablero, tablero_lleno)
                } else {
                    tablero = jugador2(tablero, i)
                    contador++
                    tablero_lleno = estado_tablero(tablero)
                    ganar = comprobar_ganador(tablero, tablero_lleno)
                }
            }
            if (ganar) {
                for (let j = 0; j < casillas.length; j++) {
                    casillas[j].removeEventListener("click", (evt))
                }
            }
        })

    }

    repetir.addEventListener("click", (evt) => {
        location.reload()
    })


}
main()