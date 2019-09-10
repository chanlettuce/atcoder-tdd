const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { N, A } = parseLines(lines);
  const sorted = A.slice().sort((a, b) => b - a);

  return A.map(v => (v === sorted[0] ? sorted[1] : sorted[0])).join('\n');
};

const parseLines = (lines: string[]) => {
  const N = +lines[0];
  const A = lines.slice(1).map(a => +a);
  const obj = { N, A };
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
