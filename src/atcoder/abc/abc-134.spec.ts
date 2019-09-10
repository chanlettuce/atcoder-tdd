import a from './abc-134-a';
import b from './abc-134-b';
import c from './abc-134-c';

const runTest = (solver, params, customParams = []) => {
  const test = param => {
    const [i, o] = param;
    expect(solver(i.split('\n'))).toBe(o);
  };
  params.forEach((p, index) => {
    it(`Test params[${index}]`, () => test(p));
  });
  customParams.forEach((p, index) => {
    it(`Test customParams[${index}]`, () => test(p));
  });
};

jest.setTimeout(1000 * 2);

describe('ABC134', () => {
  describe('D', () => {});

  describe('C', () => {
    const json = `[["3\\n1\\n4\\n3","4\\n3\\n4"],["2\\n5\\n5","5\\n5"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(c, params, customParams);
  });

  describe('B', () => {
    const json = `[["6 2","2"],["14 3","2"],["20 4","3"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(b, params, customParams);
  });
  describe('A', () => {
    const json = `[["4","48"],["15","675"],["80","19200"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(a, params, customParams);
  });
});
