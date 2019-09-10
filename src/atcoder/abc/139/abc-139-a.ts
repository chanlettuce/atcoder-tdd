const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const [S, T] = parseLines(lines);

  var cnt = 0;

  for (let i = 0; i < 3; i++) {
    if (S.charAt(i) === T.charAt(i)) cnt++;
  }

  return cnt.toString();
};

const parseLines = (lines: string[]) => {
  const obj = lines;
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
