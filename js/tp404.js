/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla 
los valores de los tres objetos instanciados.
*/
class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(`<table><tbody>`);
    document.write(`<tr>

  <td>CODIGO</td>
  <td>NOMBRE</td>
  <td>PRECIO</td>
  </tr>`);

    document.write(`<tr>
      <td>${this.codigo}</td>
      <td>${this.nombre}</td>
      <td>${this.precio}</td>
    </tr>`);

    document.write(`</tbody>
  </table></br>`);
  }
}

const producto1 = new Producto(2023, "Helado", 17800);
const producto2 = new Producto(2021, "Gaseosa", 41280);
const producto3 = new Producto(2022, "Carne", 556533);

const arregloProductos = [producto1, producto2, producto3];

for (let i = 0; i < arregloProductos.length; i++) {
  arregloProductos[i].imprimeDatos();
}
