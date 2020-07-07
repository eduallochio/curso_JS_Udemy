const imprimirResoltado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quandro de Hora')
            break
        case 8: case 7:
            console.log('Aprovador')
            break
        case 6: case 5: case 4:
            console.log('Reprovador')
            break
        case 3: case 2: case 1: case 0:
            console.log('Aprovador')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResoltado(10)
imprimirResoltado(8.9)
imprimirResoltado(6.55)
imprimirResoltado(2.3)
imprimirResoltado(1)
imprimirResoltado(11)