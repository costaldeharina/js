const producto = 'monitor 20 pulgadas';

// .replace para remplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('monitor', 'monitor curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));

// Alternativa a slice
console.log(producto.substring(0, 19));
console.log(producto.substring(2, 1));

const usuario = 'Josias';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));