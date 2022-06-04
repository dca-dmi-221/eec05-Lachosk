'use strict'

//1
/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "holaprofesipudehacerlo";

function wordCutter(word) {
    const palabraArray = testWord.split("")
    const randomArray = palabraArray.sort()
    randomArray.forEach(palabra => {
        console.log(palabra);
    })
}
wordCutter(testWord);

//2
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testTargetWordD = "Meneo";

let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

function laPalabra(word) {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace("0", "o").toUpperCase();
}

function buscaPalabraEnLista(word, wordList) {
    let palabraCorriente = word;
    let regular = laPalabra(palabraCorriente);
    const regularLista = [];
    for (let index = 0; index < wordList.length; index++) {
        regularLista.push(laPalabra(wordList[index]))
    }

    console.log(regularLista.includes(regular), `palabra: ${regular}`, regularLista)
}

buscaPalabraEnLista(testTargetWordB, testWordsList)
buscaPalabraEnLista(testTargetWordA, testWordsList)
buscaPalabraEnLista(testTargetWordC, testWordsList)
buscaPalabraEnLista(testTargetWordD, testWordsList)



//3
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/
let words = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(word) {
    let totalDeLetras = 0;
    const sortedWords = word.sort((wordA, wordB) => {
        if (wordA.length < wordB.length) {
            return -1;
        } else if (wordA.length > wordB.length) {
            return 1;
        } else {
            return 0;
        }

    });

    sortedWords.forEach(word => totalDeLetras += word.length);
    const letras = totalDeLetras / sortedWords.length;
    return {
        palabraCorta: sortedWords[0],
        palabraLarga: sortedWords[sortedWords.length - 1],
        letras
    };

}
console.log(wordLengthClassifier(words))

//4
/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/
let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    console.log(word.toLowerCase())
    let palindromeWord = word.toLowerCase().split("").reverse().join("");
    if (palindromeWord === word.toLowerCase()) {
        console.log("La palabra " + word + " es palindrome")
    } else {
        console.log("La palabra " + word + " no es palindrome")
    }
}
palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);


//5
/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(objectContainer) {
    let lasVocales = "aeiou";
    let elContador = [0, 0];
    for (let i = 0; i < objectContainer.list.length; i++) {
        let word = objectContainer.list[i];
        for (let j = 0; j < word.length; j++) {
            if (lasVocales.includes(word.charAt(j).toLowerCase())) {
                elContador[0] += 1;
            } else {
                elContador[1] += 1;
            }
        }
    }
    console.log(elContador);
}
lettersCounter(containerTestObject);


//6
/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function joiner(listA, listB) {
    let arrayJ = listA.concat(listB);
    console.log(arrayJ);
}
joiner(wordArrayA, wordArrayB);


//7
/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/
let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    resut = []
    listOfWords.forEach((testWordToExplore, index) => {
        testWordToExplore.split("").every(letra => {
            return wordToExplore.includes(letra)
        })
    })

}

//8
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/
let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let unidos = objectMultiContainer.listA.concat(objectMultiContainer.listB)
    const resultado = []
    for (let i = 0; i < unidos.length; i++) {
        const actual = unidos[i].split('');
        for (let index = 0; index < unidos[i].length; index++) {
            if (actual[index] === "a" || actual[index] === "e" || actual[index] === "i" || actual[index] === "o" || actual[index] === "u") {
                actual.splice(index, 1);
            }
        }
        resultado.push(actual.join(''))
    }
    console.log(resultado)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

//9
/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/
let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}

//10
/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/
let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}