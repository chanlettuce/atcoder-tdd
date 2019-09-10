import a from './abc-140-a';
import b from './abc-140-b';
import c from './abc-140-c';
import d from './abc-140-d';

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
    const json = `[["6 1\\nLRLRRL","3"],["13 3\\nLRRLRLRRLRLLR","9"],["10 1\\nLLLLLRRRRR","9"],["9 2\\nRRRLRLRLL","7"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(d, params, customParams);
  });

  describe('C', () => {
    const json = `[["3\\n2 5","9"],["2\\n3","6"],["6\\n0 153 10 10 23","53"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(c, params, customParams);
  });

  describe('B', () => {
    const json = `[["3\\n3 1 2\\n2 5 4\\n3 6","14"],["4\\n2 3 4 1\\n13 5 8 24\\n45 9 15","74"],["2\\n1 2\\n50 50\\n50","150"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(b, params, customParams);
  });
  describe('A', () => {
    const json = `[["2","8"],["1","1"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(a, params, customParams);
  });
});
