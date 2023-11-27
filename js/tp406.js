/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro 
con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

*/
class Libro {
  #isbn;
  #titulo;
  #autor;
  #nroPaginas;
  constructor(ISBN, titulo, autor, nroPaginas) {
    this.#isbn = ISBN;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#nroPaginas = nroPaginas;
  }

  get isbn() {
    return this.#isbn;
  }

  set isbn(nuevoISBN) {
    this.#isbn = nuevoISBN;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  get autor() {
    return this.#autor;
  }

  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  get nroPaginas() {
    return this.#nroPaginas;
  }

  set nroPaginas(nuevoPaginas) {
    this.#nroPaginas = nuevoPaginas;
  }

  mostrarLibro() {
    document.write(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.nroPaginas}<br>`
    );
  }
}

const libro = new Libro(
  "9789871093021",
  "EL ESCARABAJO DE ORO",
  "EDGAR ALLAN POE",
  128
);
const libro2 = new Libro("9788432207563", "EL TUNEL", "ERNESTO SABATO ", 158);

libro.mostrarLibro();
libro2.mostrarLibro();
