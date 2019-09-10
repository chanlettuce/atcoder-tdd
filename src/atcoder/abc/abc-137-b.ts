const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const [K, X] = parseLines(lines);
  const out = [];
  for (let i = X - K + 1; i < X + K; i++) out.push(i);
  return out.join(' ');
};

const parseLines = (lines: string[]) => {
  const obj = lines[0].split(' ').map(n => Number(n));
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
