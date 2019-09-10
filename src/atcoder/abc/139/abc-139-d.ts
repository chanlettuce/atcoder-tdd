import { homedir } from 'os';

const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { N } = parseLines(lines);

  let result = 0;

  for (let P = N, i = 1; P !== 0; --P, ++i) {
    result += i % P;
  }

  return result.toString();
};

const parseLines = (lines: string[]) => {
  const N = +lines[0];
  const obj = { N };
  debug(obj);
  return obj;
};

const debug = (message?: any, ...optionalParams: any[]) => {
  if (!!process.env.LOCAL_DEBUG) console.log(message, ...optionalParams);
};

if (!process.env.LOCAL_DEBUG) {
  const { stdin: input, stdout: output } = process;
  input.resume();
  input.setEncoding('utf8');
  const lines = [];
  require('readline')
    .createInterface({ input, output })
    .on('line', line => lines.push(line))
    .on('close', () => main(lines));
}

export default solve;
