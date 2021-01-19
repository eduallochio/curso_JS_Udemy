const quaseArray =  { 0: 'Rafael', 1: 'Ana', 2: 'Bia '}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'tostring', {
    value: function() {return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['rafael', 'Ana', 'Bia']
console.log(quaseArray.tostring(), meuArray)