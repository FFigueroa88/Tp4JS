/*Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad"
 y "profesión", y los métodos "saludar" y "despedirse". Luego, crea 
 dos objetos de la clase "Persona" con diferentes valores para sus propiedades 
 y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    document.write(
      `<p>Hola, mi nombre es ${this.nombre}. Tengo ${this.edad} años y soy ${this.profesion}</p>`
    );
  }

  despedirse() {
    document.write(`<p>Me despido. Nos vemos.</p>`);
  }
}

const persona1 = new Persona("Ruperto", 192, "Escultor en corcho");
const persona2 = new Persona("Gervasio", 42, "diseñador de sanguches");

persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();
