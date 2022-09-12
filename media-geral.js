const salaDeJS = [7,8, 8, 7, 10, 6,5, 4, 10, 7]
const salaDeJava = [6, 5, 8, 9, 5, 6]
const salaDePython = [7, 3,5, 8, 9,5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da Sala de JS ${mediaSala(salaDeJS)}`)
console.log(`Média da Sala de Python ${mediaSala(salaDeJS)}`)
console.log(`Média da Sala de Java ${mediaSala(salaDeJava)}`)