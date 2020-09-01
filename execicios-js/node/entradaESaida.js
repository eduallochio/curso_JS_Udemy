const anonimo = precess.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdout.on('data', data => {
        const nome = data.toString().replece('\n', '')

        process.stdout.write(` Fala ${nome}!!\n`)
        process.exit()
    })
}