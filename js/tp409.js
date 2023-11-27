/*Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", 
y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" 
y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato",
 y llama a sus métodos "emitirSonido" para verificar que cada animal 
 emite el sonido adecuado.
 */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    document.write(`<p>Soy ${this.nombre} y tengo ${this.edad} años</p>`);
  }
}

class Perro extends Animal {
  constructor(nombre, peso) {
    super(nombre);
    this.peso = peso;
  }

  emitirSonido() {
    document.write(
      `<p>Soy un Perro. Me llamo ${this.nombre},ladro mucho y mi peso es ${this.peso}kg</p>`
    );
  }
}

class Gato extends Animal {
  constructor(nombre, actividad) {
    super(nombre);
    this.actividad = actividad;
  }

  emitirSonido() {
    document.write(
      `<p>Mi nombre es ${this.nombre}. Soy un gato ,mi sonido es el Maullido y mi pasatiempo es ${this.actividad}</p>`
    );
  }
}

const perro = new Perro("Ginger", 35);
const gato = new Gato("Michi", "dominar el mundo");
const animal = new Animal("Alberto", 64);

animal.emitirSonido();
perro.emitirSonido();
gato.emitirSonido();
