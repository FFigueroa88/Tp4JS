/*Crea un objeto llamado auto que tenga algunas características como el color, 
 marca, modelo y si está encendido o apagado. Crea los métodos necesarios 
 para permitir encender y apagar el auto.

Output:
objeto.encender();      auto encendido
objeto.apadar()         El auto se apagó
 */

class Auto {
    constructor(color, marca, modelo) {
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.encendido = false;// se crea apagado
    }
  
    encender() {
      this.encendido = true;
      document.write(`<p>AUTO: ${this.marca} ${this.modelo} ENCENDIDO</p>`);
    }
    apagar() {
      this.encendido = false;
      document.write(`<p>AUTO: ${this.marca} ${this.modelo} APAGADO</p>`);
    }
  }
  
  const coche = new Auto("Amarillo", "Fiat", "Spazio");
  
  coche.encender();
  coche.apagar();