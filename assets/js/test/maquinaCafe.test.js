import MaquinaCafe from "../modules/maquinaCafe";
import Cafetera from "../modules/Cafetera";
import Azucar from "../modules/azucarero";
import Vasos from "../modules/vasos";

let cafe;
let vasoPequeño;
let vasoMediano;
let vasoGrande;
let azucarero;
let maquinaCafe;

beforeAll(() => {
  cafe = new Cafetera(50);
  vasoPequeño = new Vasos(5);
  vasoMediano = new Vasos(5);
  vasoGrande = new Vasos(5);
  azucarero = new Azucar(20);
  maquinaCafe = new MaquinaCafe();
});

test("Deberia devolver un vaso pequeño", () => {
  const resultado = maquinaCafe.getTipoVaso(3);
  expect(resultado).toBe("vasos3Oz");
});

test("Deberia devolver un vaso mediano", () => {
  const resultado = maquinaCafe.getTipoVaso(5);
  expect(resultado).toBe("vasos5Oz");
});

test("Deberia devolver un vaso grande", () => {
  const resultado = maquinaCafe.getTipoVaso(7);
  expect(resultado).toBe("vasos7Oz");
});

test("Deberia devolver felicitaciones", () => {
  const resultado = maquinaCafe.getVasoCafe(3, 1, 3);
  expect(resultado).toBe("Felicidades, Puede retirar su cafe de la maquina");
});
