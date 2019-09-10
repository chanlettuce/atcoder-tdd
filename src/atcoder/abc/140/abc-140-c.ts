import { homedir } from 'os';

const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const [[N], B] = parseLines(lines);

  // メモ A[i] = max(B[i-1], B[i]);

  let cnt = 0;
  cnt += B[0] + B[N - 2];
  for (let i = 1, e = N - 1; i < e; i++) cnt += Math.min(B[i - 1], B[i]);

  return cnt.toString();
};

const parseLines = (lines: string[]) => {
  const obj = lines.map(l => l.split(' ').map(n => +n));
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
