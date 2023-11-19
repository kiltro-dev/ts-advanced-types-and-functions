export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  }
}

const arrayResponse = parseStr('Ignacio');
// if (Array.isArray(arrayResponse)) {
arrayResponse.reverse();
// }
console.log(arrayResponse);

const stringResponse = parseStr(['I', 'g', 'n', 'a', 'c', 'i', 'o']);
// if (typeof stringResponse === 'string') {
stringResponse.toLowerCase();
// }

console.log(stringResponse);
