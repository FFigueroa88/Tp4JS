/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué 
generación pertenece la persona creada y cual es el rasgo característico de 
esta generación.
Para realizar este método tener en cuenta la tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando 
que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */

class Persona {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generarDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = new Date().getFullYear() - edad;
  }
  calcularGeneracion() {
    const anioActual = new Date().getFullYear();
    const anioNacimiento = this.anioNacimiento;

    if (anioNacimiento > anioActual) {
      return -1;
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
      return 0;
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
      return 1;
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
      return 2;
    } else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
      return 3;
    } else if (anioNacimiento >= 1930 && anioNacimiento <= 1948) {
      return 4;
    } else {
      return 5;
    }
  }

  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    switch (generacion) {
      case -1:
        document.write("Aún no ha nacido");
        break;
      case 0:
        document.write(
          `Generación Z: Personas nacidas a partir de 1994 Rasgo: Irreverencia`
        );
        break;
      case 1:
        document.write(
          `Generación Y: Personas nacidas entre 1981 y 1993 Rasgo: Frustracion`
        );
        break;
      case 2:
        document.write(
          `Generación X: Personas nacidas entre 1969 y 1980 Rasgo: Obsesion por el exito`
        );
        break;
      case 3:
        document.write(
          `Baby Boom: Personas nacidas entre 1949 y 1968 Rasgo: Ambicion`
        );
        break;
      case 4:
        document.write(
          `Silent Generation: Personas nacidas entre 1930 y 1948 Rasgo: Austeridad`
        );
        break;
      default:
        document.write("Otra generación");
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write("Es mayor de Edad");
    } else {
      document.write("Es mejor de Edad");
    }
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre}`);
    document.write(`Edad: ${this.edad}`);
    document.write(`DNI: ${this.dni}`);
    document.write(`Sexo: ${this.sexo}`);
    document.write(`Peso: ${this.peso}`);
    document.write(`Altura: ${this.altura}`);
    document.write(`Año de nacimiento: ${this.anioNacimiento}`);
  }

  generarDNI() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
}

const personaNueva = new Persona("Jose", 27, "H", 60, 1.75);
document.write(personaNueva);
personaNueva.esMayorDeEdad();
personaNueva.mostrarGeneracion();
