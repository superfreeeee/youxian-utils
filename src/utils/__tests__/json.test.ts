import { tryParse, tryStringify } from '../json';

const obj = { a: 1, b: 2, c: 3 };
const objStr = JSON.stringify(obj);
const NOOP_OBJ = {};

test('test tryParse', () => {
  expect(tryParse(objStr)).toEqual(obj);
});

test('test tryParse fail', () => {
  expect(tryParse(objStr.substring(0, objStr.length - 1))).toEqual(NOOP_OBJ);
});

test('test tryStringify', () => {
  expect(tryStringify(obj)).toEqual(objStr);
});

test('test tryStringify 2', () => {
  expect(tryStringify('123')).toEqual(JSON.stringify('123'));
});
