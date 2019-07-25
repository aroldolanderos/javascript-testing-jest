export function callbackSaludo(callback) {
    callback('Hola inmundo!')
}

export function unaRespuesta(callback) {
    callback({
        "data":[],
        "status":200
    })
}
