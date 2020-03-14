import { solve as c } from './problem-c';

type Solver = (lines: string[]) => string;
type Params = [string, string][];
type Problems = {
  level: string;
  solver: Solver;
  json: string;
  customParams?: Params;
}[];

const contestName = '';
const problems: Problems = [
  {
    level: 'c',
    solver: c,
    json: `[["2 2","25"],["8 10","100"],["19 99","-1"]]`,
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
