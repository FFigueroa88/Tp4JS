/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad 
como parámetro.
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero 
y volver a mostrar la descripción del estado de la cuenta.
*/
class Cuenta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  ingresar(monto) {
    if (monto > 0) {
      this.saldo = this.saldo + monto;
      document.write(
        `<p>Se ingresó $${monto} a la cuenta de ${this.titular}. Saldo actual: ${this.saldo}</p>`
      );
    } else {
      document.write(
        `<p>Ingresó un valor incorrecto como monto a ingresar</p>`
      );
    }
  }
  extraer(monto) {
    if (monto > 0 && this.saldo >= monto) {
      this.saldo = this.saldo - monto;
      document.write(
        `<p>Se extrajó $${monto} de la cuenta de ${this.titular}. Saldo actual: $${this.saldo}</p>`
      );
    } else {
      document.write(`<p>Monto inválido o saldo insuficiente</p>`);
    }
  }
  informar() {
    document.write(
      `<p>Saldo actual de la cuenta de ${this.titular}: $${this.saldo}</p>`
    );
  }
}

const nuevoUsuario = new Cuenta("Chucho Beltran");

nuevoUsuario.informar();

nuevoUsuario.ingresar(45000);

nuevoUsuario.extraer(18741);

nuevoUsuario.ingresar("hola");

nuevoUsuario.informar();
