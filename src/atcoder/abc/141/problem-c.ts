import { createInterface } from 'readline';

const main = (lines: string[]) => {
  console.log(solve(lines));
};

export const solve = (lines: string[]): string => {
  const { N, K, Q, A } = parseLines(lines);
  let out = '';
  const n = +N;

  if (+K > +Q) {
    for (let i = 0; i < n; i++) {
      out += 'Yes\n';
    }
    return out.slice(0, -1);
  }

  const tgt = +Q - +K;

  const memo = A.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }
    ++acc[cur];

    return acc;
  }, {});

  for (let i = 0; i < n; i++) {
    out += memo[(i + 1).toString()] > tgt ? 'Yes\n' : 'No\n';
  }

  return out.slice(0, -1);
};

const parseLines = (lines: string[]) => {
  const [first, ...A] = lines;
  const [N, K, Q] = first.split(' ');
  const obj = { N, K, Q, A };
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
