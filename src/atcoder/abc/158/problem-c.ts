import { createInterface } from 'readline';

const main = (lines: string[]) => {
  console.log(solve(lines));
};

export const solve = (lines: string[]): string => {
  const { A, B } = parseLines(lines);

  const N1: number[] = [];
  for (let i = 1; i < 1001; i++) {
    if (Math.floor(i * 0.08) === A) {
      N1.push(i);
    }
  }

  const N2: number[] = [];
  for (let i = 1; i < 1001; i++) {
    if (Math.floor(i * 0.1) === B) {
      N2.push(i);
    }
  }

  const N = N1.find(n1 => N2.findIndex(n2 => n1 === n2) !== -1);

  return (N || -1).toString();
};

const parseLines = (lines: string[]) => {
  const [A, B] = lines[0].split(' ').map(e => +e);
  const obj = { A, B };
  debug(obj);
  return obj;
};

const debug = (message?: any, ...optionalParams: any[]) => {
  if (!!process.env.LOCAL_DEBUG) {
    console.log(message, ...optionalParams);
  }
};

if (!process.env.LOCAL_DEBUG) {
  const { stdin: input, stdout: output } = process;
  input.resume();
  input.setEncoding('utf8');
  const lines: string[] = [];
  createInterface({ input, output })
    .on('line', (line: string) => lines.push(line))
    .on('close', () => main(lines));
}
