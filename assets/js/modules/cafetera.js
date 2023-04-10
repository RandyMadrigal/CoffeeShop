export default class Cafetera {
  cantidadCafe;

  //Constructor.
  constructor(cantidadCafe) {
    this.cantidadCafe = cantidadCafe;
  }

  setCantidadCafe(cantidad) {
    this.cantidadCafe = cantidad;
  }

  getCantidadCafe() {
    return this.cantidadCafe;
  }

  hasCafe(cantidadCafe) {
    let verificar = false;
    if (cantidadCafe > this.cantidadCafe) {
      return verificar;
    }
    verificar = true;
    return verificar;
  }

  giveCafe(cantidadCafe) {
    if (this.cantidadCafe < cantidadCafe) {
      throw new Error("No tenemos la cantidad de cafe que esta solicitando");
    }
    let disponible = this.cantidadCafe - cantidadCafe;
    this.setCantidadCafe(disponible);
  }
}
