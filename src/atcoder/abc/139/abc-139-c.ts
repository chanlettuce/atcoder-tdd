const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { N, H } = parseLines(lines);

  const a = N - 1;

  let tmp = 0;
  let result = 0;

  for (let i = 0; i < a; ++i) {
    if (H[i] >= H[i + 1]) {
      ++tmp;
    } else {
      result = Math.max(tmp, result);
      tmp = 0;
    }
  }

  return Math.max(tmp, result).toString();
};

const parseLines = (lines: string[]) => {
  const N = +lines[0];
  const H = lines[1].split(' ').map(i => +i);
  const obj = { N, H };
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
