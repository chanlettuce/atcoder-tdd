import { solve as a } from './problem-a';

type Solver = (lines: string[]) => string;
type Params = Array<[string, string]>;

const runTest = (solver: Solver, params: Params, customParams: Params = []) => {
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
  describe('D', () => {});
  describe('C', () => {});
  describe('B', () => {});
  describe('A', () => {
    const json = `[["aabbaa","4"],["aaaccacabaababc","12"]]`;
    const params = JSON.parse(json);
    const customParams = [];
    runTest(a, params, customParams);
  });
});
