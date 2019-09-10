import a from './abc-137-a';
import b from './abc-137-b';
import c from './abc-137-c';
import d from './abc-137-d';

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
  describe('F', () => {});
  describe('E', () => {});
  describe('D', () => {
    const json = `[["3 4\\n4 3\\n4 1\\n2 2","5"],["5 3\\n1 2\\n1 3\\n1 4\\n2 1\\n2 3","10"],["1 1\\n2 1","0"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(d, params, customParams);
  });
  describe('C', () => {
    const json = `[["3\\nacornistnt\\npeanutbomb\\nconstraint","1"],["2\\noneplustwo\\nninemodsix","0"],["5\\nabaaaaaaaa\\noneplustwo\\naaaaaaaaba\\ntwoplusone\\naaaabaaaaa","4"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(c, params, customParams);
  });
  describe('B', () => {
    const json = `[["3 7","5 6 7 8 9"],["4 0","-3 -2 -1 0 1 2 3"],["1 100","100"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(b, params, customParams);
  });
  describe('A', () => {
    const json = `[["-13 3","-10"],["1 -33","34"],["13 3","39"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(a, params, customParams);
  });
});
