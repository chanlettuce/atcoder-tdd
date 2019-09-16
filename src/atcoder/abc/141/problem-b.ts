import { createInterface } from 'readline';

const main = (lines: string[]) => {
  console.log(solve(lines));
};

export const solve = (lines: string[]): string => {
  const S = parseLines(lines);

  return S.split('').every(
    (e, i) => (i % 2 === 0 && e !== 'L') || (i % 2 === 1 && e !== 'R')
  )
    ? 'Yes'
    : 'No';
};

const parseLines = (lines: string[]) => {
  const obj = lines[0];
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
    .on('line', line => lines.push(line))
    .on('close', () => main(lines));
}
