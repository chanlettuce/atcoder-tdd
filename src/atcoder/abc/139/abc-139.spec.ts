import a from './abc-139-a';
import b from './abc-139-b';
import c from './abc-139-c';
import d from './abc-139-d';

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
  describe('D', () => {
    const json = `[["2","1"],["13","78"],["1","0"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(d, params, customParams);
  });

  describe('C', () => {
    const json = `[["5\\n10 4 8 7 3","2"],["7\\n4 4 5 6 6 5 5","3"],["4\\n1 2 3 4","0"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(c, params, customParams);
  });

  describe('B', () => {
    const json = `[["4 10","3"],["8 9","2"],["8 8","1"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(b, params, customParams);
  });
  describe('A', () => {
    const json = `[["CSS\\nCSR","2"],["SSR\\nSSR","3"],["RRR\\nSSS","0"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(a, params, customParams);
  });
});
