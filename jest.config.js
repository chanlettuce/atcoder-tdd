module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
