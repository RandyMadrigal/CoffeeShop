import Vasos from "../modules/vasos.js";
import Azucarero from "../modules/azucarero.js";
import Cafetera from "../modules/Cafetera.js";

export default class MaquinaCafe {
  vasos3Oz = new Vasos(50);
  vasos5Oz = new Vasos(50);
  vasos7Oz = new Vasos(50);
  cafetera = new Cafetera(50);
  azucarero = new Azucarero(50);

  getTipoVaso(tipoVaso) {
    if (tipoVaso === 3) {
      return "vasos3Oz";
    } else if (tipoVaso === 5) {
      return "vasos5Oz";
    } else {
      return "vasos7Oz";
    }
  }

  /*
getTipoVaso(tipoVaso) {
    if (tipoVaso === 3) {
      return this.vasos3Oz;
    } else if (tipoVaso === 5) {
      return this.vasos5Oz;
    } else {
      return this.vasos7Oz;
    }
  }
  */

  getVasoCafe(tipoVaso, ServirCafe, servirAzucar) {
    return "Felicidades, Puede retirar su cafe de la maquina";
  }
}
