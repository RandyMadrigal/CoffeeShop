import Cafetera from "../modules/Cafetera";

let cafe;

beforeAll(() => {
  cafe = new Cafetera(5);
});

test("deberia devolver verdadero si exite cafe", () => {
  const verificar = cafe.hasCafe(3);
  expect(verificar).toBe(true);
});

test("deberia devolver falso si no exite cafe", () => {
  const verificar = cafe.hasCafe(8);
  expect(verificar).toBe(false);
});

test("deberia restar la cantidad de vasos", () => {
  const verificar = cafe.giveCafe(1);
  expect(cafe.getCantidadCafe()).toEqual(4);
});
