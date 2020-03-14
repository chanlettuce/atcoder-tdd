const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { N, D } = parseLines(lines);
  return Math.ceil(N / (D * 2 + 1)).toString();
};

const parseLines = (lines: string[]) => {
  const [N, D] = lines[0].split(' ').map(v => +v);
  const obj = { N, D };
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
