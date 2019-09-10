import { createInterface } from 'readline';

const main = (lines: string[]) => {
  console.log(solve(lines));
};

export const solve = (lines: string[]): string => {
  const S = parseLines(lines);

  const c = S.split('');
  let buf = '';
  let prev = '';
  let cnt = 0;

  c.forEach(e => {
    buf += e;
    if (buf === prev) {
      return;
    }

    prev = buf;
    buf = '';
    ++cnt;
  });

  return cnt.toString();
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
