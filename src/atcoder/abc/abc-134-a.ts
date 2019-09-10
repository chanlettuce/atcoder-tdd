const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { r } = parseLines(lines);
  return (3 * r * r).toString();
};

const parseLines = (lines: string[]) => {
  const r = +lines[0];
  const obj = { r };
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
