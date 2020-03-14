const main = lines => {
  console.log(solve(lines));
};

const solve = (lines: string[]): string => {
  const { M, AB } = parseLines(lines);

  AB.sort(({ B: B1 }, { B: B2 }) => B2 - B1);

  let ans = 0;
  for (let i = 1; i <= M; ++i) {
    const idx = AB.findIndex(({ A }) => A <= i);
    if (idx !== -1) {
      ans += AB.splice(idx, 1)[0].B;
    }
  }

  return ans.toString();
};

const parseLines = (lines: string[]) => {
  const obj = {
    M: +lines[0].split(' ')[1],
    AB: lines.slice(1).map(ab => {
      const [A, B] = ab.split(' ');
      return {
        A: +A,
        B: +B,
      };
    }),
  };
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
