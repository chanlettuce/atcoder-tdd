import { homedir } from 'os';

const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { N, K, S } = parseLines(lines);

  return '0';
};

const parseLines = (lines: string[]) => {
  const [N, K] = lines[0].split('').map(n => +n);
  const S = lines[1];
  const obj = { N, K, S };
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
