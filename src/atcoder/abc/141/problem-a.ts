import { createInterface } from 'readline';

const main = (lines: string[]) => {
  console.log(solve(lines));
};

export const solve = (lines: string[]): string => {
  const S = parseLines(lines);

  if (S === 'Sunny') {
    return 'Cloudy';
  }
  if (S === 'Cloudy') {
    return 'Rainy';
  }

  return 'Sunny';
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
