import { tryParse, tryStringify } from '../json';

const obj = { a: 1, b: 2, c: 3 };
const objStr = JSON.stringify(obj);
const NOOP_OBJ = {};

describe('tryParse tests', () => {
  test('test 1', () => {
    expect(tryParse(objStr)).toEqual(obj);
  });

  test('fail test', () => {
    expect(tryParse(objStr.substring(1))).toEqual(NOOP_OBJ);
  });
});

describe('tryStringify tests', () => {
  test('test 1', () => {
    expect(tryStringify(obj)).toEqual(objStr);
  });

  test('test 2', () => {
    expect(tryStringify('123')).toEqual(JSON.stringify('123'));
  });

  test('fail test(cycle Object)', () => {
    const objA: any = { b: null };
    const objB: any = { a: null };
    objA.b = objB;
    objB.a = objA;
    expect(tryStringify(objA)).toEqual('');
  });
});
