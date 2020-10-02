import flattenArray from '../../src/flatten';

describe('flattenArray', () => {
  it('should flatten a two dimensional array', () => {
    const inputArray = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expectedArray = [1, 2, 3, 4, 5, 6];

    const transformedArray = flattenArray(inputArray);
    expect(transformedArray).toEqual(expectedArray);
  });

  it('should flatten a multi nested array', () => {
    const inputArray = [
      [[1, 2], [3, 4], 5], [6], 7, [[[8, [[[9]]]]]],
    ];
    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const transformedArray = flattenArray(inputArray);
    expect(transformedArray).toEqual(expectedArray);
  });
});
