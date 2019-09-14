import { solve as a } from './problem-a';

type Solver = (lines: string[]) => string;
type Params = Array<[string, string]>;
type Problems = Array<{
  level: string;
  solver: Solver;
  json: string;
  customParams?: Params;
}>;

const contestName = '';
const problems: Problems = [
  {
    level: 'a',
    solver: a,
    json: `[["aabbaa","4"],["aaaccacabaababc","12"]]`,
  },
];

const runTest = (solver: Solver, params: Params, customParams: Params = []) => {
  const test = (param: [string, string]) => {
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

describe(contestName, () => {
  problems.forEach(({ level, solver, json, customParams }) => {
    describe(level, () => {
      runTest(solver, JSON.parse(json), customParams);
    });
  });
});
