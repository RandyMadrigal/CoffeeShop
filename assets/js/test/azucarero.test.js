import Azucar from "../modules/azucarero";

let azucar;

beforeAll(() => {
  azucar = new Azucar(5);
});

test("deberia devolver verdadero si hay suficiente azucar", () => {
  const verificar = azucar.hasAzucar(3);
  expect(verificar).toBe(true);
});

test("deberia devolver falso si no suficiente azucar", () => {
  const verificar = azucar.hasAzucar(8);
  expect(verificar).toBe(false);
});

test("deberia restar azucar al azucarero", () => {
  const verificar = azucar.giveAzucar(1);
  expect(azucar.getCantidadAzucar()).toEqual(4);
});
