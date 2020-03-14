const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const [N, A, B, C] = parseLines(lines);

  return A.reduce(
    (acc, cur) => {
      if (acc.prev + 1 === +cur) {
        acc.sum += +C[+cur - 2];
      }
      acc.prev = +cur;
      acc.sum += +B[+cur - 1];
      return acc;
    },
    { sum: 0, prev: -1 }
  ).sum.toString();
};

const parseLines = (lines: string[]) => {
  const obj = lines.map(e => e.split(' '));
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
  require('readline')
    .createInterface({ input, output })
    .on('line', (line: string) => lines.push(line))
    .on('close', () => main(lines));
}

export default solve;
