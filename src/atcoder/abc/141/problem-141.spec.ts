import { solve as a } from './problem-a';
import { solve as b } from './problem-b';
import { solve as c } from './problem-c';
import { solve as d } from './problem-d';

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
    level: 'a',
    solver: a,
    json: `[["Sunny","Cloudy"],["Rainy","Sunny"]]`,
  },
  {
    level: 'b',
    solver: b,
    json: `[["RUDLUDR","Yes"],["DULL","No"],["UUUUUUUUUUUUUUU","Yes"],["ULURU","No"],["RDULULDURURLRDULRLR","Yes"]]`,
  },
  {
    level: 'c',
    solver: c,
    json: `[["6 3 4\\n3\\n1\\n3\\n2","No\\nNo\\nYes\\nNo\\nNo\\nNo"],["6 5 4\\n3\\n1\\n3\\n2","Yes\\nYes\\nYes\\nYes\\nYes\\nYes"],["10 13 15\\n3\\n1\\n4\\n1\\n5\\n9\\n2\\n6\\n5\\n3\\n5\\n8\\n9\\n7\\n9","No\\nNo\\nNo\\nNo\\nYes\\nNo\\nNo\\nNo\\nYes\\nNo"]]`,
  },
  {
    level: 'd',
    solver: d,
    json: `[["6 3 4\\n3\\n1\\n3\\n2","No\\nNo\\nYes\\nNo\\nNo\\nNo"],["6 5 4\\n3\\n1\\n3\\n2","Yes\\nYes\\nYes\\nYes\\nYes\\nYes"],["10 13 15\\n3\\n1\\n4\\n1\\n5\\n9\\n2\\n6\\n5\\n3\\n5\\n8\\n9\\n7\\n9","No\\nNo\\nNo\\nNo\\nYes\\nNo\\nNo\\nNo\\nYes\\nNo"]]`,
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
