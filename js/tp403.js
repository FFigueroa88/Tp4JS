/* 
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con 
las propiedades de alto y ancho, mas los métodos necesarios para modificar 
y mostrar sus propiedades, calcular el perímetro y el área
*/
class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
      this.perimetro = 0;
      this.area = 0;
    }
  
    calcularPerimetro() {
      if (this.alto > 0 && this.ancho > 0) {
        this.perimetro = this.alto * 2 + this.ancho * 2;
        document.write(`<p>El Perimetro del rectangulo es: ${this.perimetro}</p>`);
      } else {
        document.write(`<p>Debe ingresar valores mayores a cero</p>`);
      }
    }
  
    calcularArea() {
      if (this.alto > 0 && this.ancho > 0) {
        this.area = this.alto * this.ancho;
        document.write(`<p>El Area del rectangulo es: ${this.area}</p>`);
      } else {
        document.write(`<p>Debe ingresar valores mayores a cero</p>`);
      }
    }
  }
  
  const rectangulo = new Rectangulo(5, 3);
  rectangulo.calcularArea();
  rectangulo.calcularPerimetro();

  const otroRectangulo = new Rectangulo(-56, 3);
  otroRectangulo.calcularArea();
  otroRectangulo.calcularPerimetro();

  const otroRectanguloMas = new Rectangulo("hola", "kiko");
  otroRectanguloMas.calcularArea();
  otroRectanguloMas.calcularPerimetro();
