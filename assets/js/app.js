import Vasos from "./modules/vasos.js";
import Azucarero from "./modules/azucarero.js";
import Cafetera from "./modules/Cafetera.js";

export default class MaquinaCafe {
  vasos3Oz = new Vasos(50);
  vasos5Oz = new Vasos(50);
  vasos7Oz = new Vasos(50);
  cafetera = new Cafetera(50);
  azucarero = new Azucarero(50);

  getTipoVaso(tipoVaso) {
    if (tipoVaso === 3) {
      return this.vasos3Oz;
    } else if (tipoVaso === 5) {
      return this.vasos5Oz;
    } else {
      return this.vasos7Oz;
    }
  }

  getVasoCafe(tipoVaso, ServirCafe, servirAzucar) {
    return "Puede retirar su cafe de la maquina";
  }
}

const maquinaCafe = new MaquinaCafe();
let tipoVaso;
let servirCafe;
let servirAzucar;

const inputVaso = document.getElementById("Vasos");
const inputCafe = document.getElementById("cafe");
const inputAzucar = document.getElementById("azucar");

const paso1 = document.getElementById("paso1");
paso1.addEventListener("click", TipoVaso);

const paso2 = document.getElementById("paso2");
paso2.addEventListener("click", ServirCafe);

const paso3 = document.getElementById("paso3");
paso3.addEventListener("click", ServirAzucar);

const paso4 = document.getElementById("paso4");
paso4.addEventListener("click", CafeListo);

const setDisponible = () => {
  document.getElementById("vasos3oz_D").innerHTML +=
    " " + maquinaCafe.vasos3Oz.getCantidadVasos();

  document.getElementById("vasos5oz_D").innerHTML +=
    " " + maquinaCafe.vasos5Oz.getCantidadVasos();

  document.getElementById("vasos7oz_D").innerHTML +=
    " " + maquinaCafe.vasos7Oz.getCantidadVasos();

  document.getElementById("cafe_D").innerHTML +=
    " " + maquinaCafe.cafetera.getCantidadCafe();

  document.getElementById("azucar_D").innerHTML +=
    " " + maquinaCafe.azucarero.getCantidadAzucar();
};

function clean() {
  document.getElementById("vasos3oz_D").innerHTML = "";
  document.getElementById("vasos5oz_D").innerHTML = "";
  document.getElementById("vasos7oz_D").innerHTML = "";
  document.getElementById("cafe_D").innerHTML = "";
  document.getElementById("azucar_D").innerHTML = "";
}

function TipoVaso() {
  let verificar;

  if (inputVaso.value == 3) {
    verificar =
      maquinaCafe.vasos3Oz.hasVasos(maquinaCafe.vasos3Oz.getCantidadVasos()) ==
      true
        ? true
        : false;
    maquinaCafe.vasos3Oz.giveVasos(1);
  } else if (inputVaso.value == 5) {
    verificar =
      maquinaCafe.vasos5Oz.hasVasos(maquinaCafe.vasos5Oz.getCantidadVasos()) ==
      true
        ? true
        : false;
    maquinaCafe.vasos5Oz.giveVasos(1);
  } else if (inputVaso.value == 7) {
    verificar =
      maquinaCafe.vasos7Oz.hasVasos(maquinaCafe.vasos7Oz.getCantidadVasos()) ==
      true
        ? true
        : false;
    maquinaCafe.vasos7Oz.giveVasos(1);
  } else {
    toastr.error(`Tamaño incorrecto`, `Error`, {
      timeOut: 2000,
      positionClass: "toast-top-right",
      Onclick: null,
      closeButton: true,
    });
    throw new Error("Ingrese el tamaño correcto");
  }
  inputVaso.disabled = true;
  paso1.disabled = true;
  tipoVaso = inputVaso.value;

  clean();
  setDisponible();
  toastr.success(`Un vaso de ${tipoVaso} Oz`, `Ok`, {
    timeOut: 2000,
    positionClass: "toast-top-right",
    Onclick: null,
    closeButton: true,
  });
}

function ServirCafe() {
  console.log(inputCafe.value);
  if (
    parseInt(inputCafe.value) > tipoVaso ||
    tipoVaso == undefined ||
    parseInt(inputCafe.value) < 0
  ) {
    toastr.error("La cantidad no corresponde al tipo de vaso", "Error", {
      timeOut: 2000,
      positionClass: "toast-top-right",
      Onclick: null,
      closeButton: true,
    });

    throw new Error("la cantidad no corresponde al tipo de vaso");
  }

  if (inputCafe.value > maquinaCafe.cafetera.getCantidadCafe) {
    toastr.error(
      "La maquina no tiene la cantidad de cafe solicitada",
      "Error",
      {
        timeOut: 2000,
        positionClass: "toast-top-right",
        Onclick: null,
        closeButton: true,
      }
    );
    throw new Error("La maquina no tiene la cantidad de cafe solicitada");
  }

  let verificar = maquinaCafe.cafetera.hasCafe(inputCafe.value);

  if (verificar) {
    maquinaCafe.cafetera.giveCafe(inputCafe.value);
  }

  servirCafe = inputCafe.value;

  inputCafe.disabled = true;
  paso2.disabled = true;

  clean();
  setDisponible();
  toastr.success(`${servirCafe}` + `.Oz de Cafe`, `Ok`, {
    timeOut: 2000,
    positionClass: "toast-top-right",
    Onclick: null,
    closeButton: true,
  });
}

function ServirAzucar() {
  console.log(inputAzucar.value);

  if (parseInt(inputAzucar.value) > maquinaCafe.azucarero.getCantidadAzucar) {
    toastr.error(
      "La maquina no tiene la cantidad de azucar solicitada",
      "Error",
      {
        timeOut: 2000,
        positionClass: "toast-top-right",
        Onclick: null,
        closeButton: true,
      }
    );
    throw new Error("La maquina no tiene la cantidad de azucar solicitada");
  }

  let verificar = maquinaCafe.azucarero.hasAzucar(inputAzucar.value);

  if (verificar) {
    maquinaCafe.azucarero.giveAzucar(inputAzucar.value);
  }

  servirAzucar = inputAzucar.value;

  inputAzucar.disabled = true;
  paso3.disabled = true;

  clean();
  setDisponible();

  toastr.success(`${servirAzucar}` + " cucharadas de azucar", `Ok`, {
    timeOut: 2000,
    positionClass: "toast-top-right",
    Onclick: null,
    closeButton: true,
  });
}

function CafeListo() {
  try {
    maquinaCafe.getTipoVaso(tipoVaso);
    let text = maquinaCafe.getVasoCafe(tipoVaso, servirCafe, servirAzucar);

    toastr.success(`${text}`, `:D`, {
      timeOut: 20000,
      positionClass: "toast-top-right",
      Onclick: null,
      closeButton: true,
    });

    Reset();
  } catch (err) {
    console.log(err);
  }
}

function Reset() {
  inputVaso.value = "";
  inputVaso.disabled = false;
  paso1.disabled = false;

  inputCafe.value = "";
  inputCafe.disabled = false;
  paso2.disabled = false;

  inputAzucar.value = "";
  inputAzucar.disabled = false;
  paso3.disabled = false;
}

setDisponible();
