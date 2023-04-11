import Vasos from "../modules/vasos";

let vaso;

beforeAll(() => {
  vaso = new Vasos(5);
});

test("deberia devolver verdadero si exiten vasos", () => {
  const verificar = vaso.hasVasos(3);
  expect(verificar).toBe(true);
});

test("deberia devolver falso si no exiten vasos", () => {
  const verificar = vaso.hasVasos(8);
  expect(verificar).toBe(false);
});

test("deberia restar la cantidad de vasos", () => {
  const verificar = vaso.giveVasos(1);
  expect(vaso.getCantidadVasos()).toEqual(4);
});
