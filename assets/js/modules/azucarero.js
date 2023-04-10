export default class Azucar {
  cantidadAzucar;

  //Constructor.
  constructor(cantidadAzucar) {
    this.cantidadAzucar = cantidadAzucar;
  }

  setCantidadAzucar(cantidad) {
    this.cantidadAzucar = cantidad;
  }

  getCantidadAzucar() {
    return this.cantidadAzucar;
  }

  hasAzucar(cantidadAzucar) {
    let verificar = false;
    if (cantidadAzucar > this.cantidadAzucar) {
      return verificar;
    }
    verificar = true;
    return verificar;
  }

  giveAzucar(cantidadAzucar) {
    if (this.cantidadAzucar < cantidadAzucar) {
      throw new Error("No tenemos la cantidad de azucar que esta solicitando");
    }
    let disponible = this.cantidadAzucar - cantidadAzucar;
    this.setCantidadAzucar(disponible);
  }
}
