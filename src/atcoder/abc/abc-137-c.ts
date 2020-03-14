const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { s } = parseLines(lines);

  const t: { [s: string]: number } = {};
  let ans = 0;

  s.forEach(str => {
    const a = str
      .split('')
      .sort()
      .join('');
    if (!t[a]) {
      t[a] = 1;
    } else {
      ans += t[a];
      ++t[a];
    }
  });

  return ans.toString();
};

const parseLines = (lines: string[]) => {
  const obj = { N: +lines[0], s: lines.slice(1) };
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
