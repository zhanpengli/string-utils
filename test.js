// test/index.test.js
import { capitalize, chunkArray } from './src/index.js';

describe('String Utilities', () => {
  test('capitalize should work', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });
});

describe('Array Utilities', () => {
  test('chunkArray should work', () => {
    expect(chunkArray([1,2,3], 2)).toEqual([[1,2], [3]]);
    expect(chunkArray([], 2)).toEqual([]);
  });
});