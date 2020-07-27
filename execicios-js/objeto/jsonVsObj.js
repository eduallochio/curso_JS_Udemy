const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

/* Maneiras de não desclarar um  JSON 
console.log(JSON.parse("{a: 1, b: 2, c: 3"))
console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
*/


// formatos validos
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))
