/**
 * Pregunto al usuario
 * @param {string} nombre - lo que se quiere confirmar
 * @returns {boolean} - true=> confirmar ; false=> No confirmar
 */
function confirmar(nombre) {

    do {
        /**
         * respuesta del usuario
         * @type {string}
         */
        var confirmar = prompt("¿Quieres " + nombre + " ?(Y/N)")
    } while ((confirmar != "y") & (confirmar != "n"));

    if (confirmar == "y") {
        return true
    } else {
        return false
    }

}