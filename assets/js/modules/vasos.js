export default class Vasos {
  cantidadVasos;
  cantidad;

  //Constructor.
  constructor(cantidadVasos) {
    this.cantidadVasos = cantidadVasos;
  }

  setCantidaVasos(cantidad) {
    this.cantidadVasos = cantidad;
  }

  getCantidadVasos() {
    return this.cantidadVasos;
  }

  hasVasos(cantidadVasos) {
    let verificar = false;
    if (cantidadVasos > this.cantidadVasos) {
      return verificar;
    }
    verificar = true;
    return verificar;
  }

  giveVasos(cantidadVasos) {
    if (this.cantidadVasos < cantidadVasos) {
      throw new Error("No tenemos la cantidad de vasos que esta solicitando");
    }

    let disponible = this.cantidadVasos - cantidadVasos;
    this.setCantidaVasos(disponible);
  }
}
