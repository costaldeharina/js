const producto = 'monitor 20 pulgadas';

// .repet te va a permitir repetir la cadena de texto...

const texto = ' en Promocion'.repeat(2,4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split, dividir un string

const actividad = 'Estoy aprendiendo JS moderno';
console.log(actividad.split(''))

const hobbies = 'leer, caminar, escuchar música, escribir, existir';
console.log(hobbies.split(", " ));

const tweet = 'Aprendiendo JS moderno #uwu';
console.log(tweet.split('#'));