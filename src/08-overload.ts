function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const arrayResponse = parseStr('Ignacio');

console.log(arrayResponse);

const stringResponse = parseStr(['I', 'g', 'n', 'a', 'c', 'i', 'o']);

console.log(stringResponse);
