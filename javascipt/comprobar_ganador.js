function comprobar_ganador(tablero, turnos) {
    var aux_comp_ganador = tablero
    var aux_ganar = false
    for (let i = 0; i < aux_comp_ganador.length; i++) {
        for (let j = 0; j < aux_comp_ganador[i].length; j++) {
            if ((i == 0) & (j == 0)) {
                if (aux_comp_ganador[i][j] == "X") {
                    if (aux_comp_ganador[i][j + 1] == "X") {
                        if (aux_comp_ganador[i][j + 2] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                    if (aux_comp_ganador[i + 1][j + 1] == "X") {
                        if (aux_comp_ganador[i + 2][j + 2] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                    if (aux_comp_ganador[i + 1][j] == "X") {
                        if (aux_comp_ganador[i + 2][j] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                }
                if (aux_comp_ganador[i][j] == "O") {
                    if (aux_comp_ganador[i][j + 1] == "O") {
                        if (aux_comp_ganador[i][j + 2] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                    if (aux_comp_ganador[i + 1][j + 1] == "O") {
                        if (aux_comp_ganador[i + 2][j + 2] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                    if (aux_comp_ganador[i + 1][j] == "O") {
                        if (aux_comp_ganador[i + 2][j] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                }

            }
            if ((i == 0) & (j == 1)) {
                if (aux_comp_ganador[i][j] == "X") {
                    if (aux_comp_ganador[i + 1][j] == "X") {
                        if (aux_comp_ganador[i + 2][j] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                }
                if (aux_comp_ganador[i][j] == "O") {
                    if (aux_comp_ganador[i + 1][j] == "O") {
                        if (aux_comp_ganador[i + 2][j] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                }


            }
            if ((i == 0) & (j == 2)) {
                if (aux_comp_ganador[i][j] == "X") {
                    if (aux_comp_ganador[i + 1][j - 1] == "X") {
                        if (aux_comp_ganador[i + 2][j - 2] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                    if (aux_comp_ganador[i + 1][j] == "X") {
                        if (aux_comp_ganador[i + 2][j] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                }
                if (aux_comp_ganador[i][j] == "O") {
                    if (aux_comp_ganador[i + 1][j - 1] == "O") {
                        if (aux_comp_ganador[i + 2][j - 2] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                    if (aux_comp_ganador[i + 1][j] == "O") {
                        if (aux_comp_ganador[i + 2][j] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                }

            }
            if ((i == 1) & (j == 0)) {
                if (aux_comp_ganador[i][j] == "X") {
                    if (aux_comp_ganador[i][j + 1] == "X") {
                        if (aux_comp_ganador[i][j + 2] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                }
                if (aux_comp_ganador[i][j] == "O") {
                    if (aux_comp_ganador[i][j + 1] == "O") {
                        if (aux_comp_ganador[i][j + 2] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                }
            }
            if ((i == 2) & (j == 0)) {
                if (aux_comp_ganador[i][j] == "X") {
                    if (aux_comp_ganador[i][j + 1] == "X") {
                        if (aux_comp_ganador[i][j + 2] == "X") {
                            alert("El Jugador nº 1 ganó")
                            aux_ganar = true
                        }
                    }
                }
                if (aux_comp_ganador[i][j] == "O") {
                    if (aux_comp_ganador[i][j + 1] == "O") {
                        if (aux_comp_ganador[i][j + 2] == "O") {
                            alert("El Jugador nº 2 ganó")
                            aux_ganar = true
                        }
                    }
                }
            }
        }
    }
    if (!aux_ganar & (turnos == 9)) {
        alert("La partida termina en tablas")
        aux_ganar = true
    }
    return aux_ganar
}