const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { A, B } = parseLines(lines);

  let n = 1;
  let cnt = 0;

  while (n < B) {
    n = n + A - 1;
    cnt++;
  }

  return cnt.toString();
};

const parseLines = (lines: string[]) => {
  const [A, B] = lines[0].split(' ').map(v => +v);
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
  require('readline')
    .createInterface({ input, output })
    .on('line', (line: string) => lines.push(line))
    .on('close', () => main(lines));
}

export default solve;
