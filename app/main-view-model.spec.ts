import { ErrorMap, TriangleModel } from "~/main-view-model";

const validSides = [
  [1, 4, 4],
  [0.8, 12, 11.9],
  [6, 6, 6],
  [5, 3, 4],
  [8.1, 20, 15.7],
  [47, 32, 65],
  [20, 20, 27],
  [3, 2, 3]
];

const invalidSides = [
  [0, 7, 7],
  [12, 10, 1],
  [-1, 17, 18],
  [1, 2, 3],
  null,
  [0],
  ['one', 2, 4]
];

const viewModel = new TriangleModel();

describe('MainViewModel Test', () => {

  describe('#_validateSideValues', () => {
    it('should return "null" if the values supplied are valid', async () => {
      validSides.forEach(values => {
        assert.isNull(viewModel._validateSideValues(values));
      })
    })
    it('should return a detailed message if the values are invalid', async () => {
      const [zero1, bcLTa1, zero2, abLTc1, invalid1, invalid2, numbers1] = invalidSides as any;
      assert.equal(viewModel._validateSideValues(zero1), ErrorMap.gt0);
      assert.equal(viewModel._validateSideValues(bcLTa1), ErrorMap.bcLTa);
      assert.equal(viewModel._validateSideValues(zero2), ErrorMap.gt0);
      assert.equal(viewModel._validateSideValues(abLTc1), ErrorMap.abLTc);
      assert.equal(viewModel._validateSideValues(invalid1), ErrorMap.invalid);
      assert.equal(viewModel._validateSideValues(invalid2), ErrorMap.invalid);
      assert.equal(viewModel._validateSideValues(numbers1), ErrorMap.numbers);
    })
  });

  describe('#_determineTriangleType', () => {
    it('should return the type of triangle to display', async () => {
      const [isosceles1, scalene1, equilateral1, scalene2, scalene3, scalene4, isosceles2, isosceles3] = validSides;
      assert.equal(viewModel._determineTriangleType(isosceles1), 'isosceles');
      assert.equal(viewModel._determineTriangleType(scalene1), 'scalene');
      assert.equal(viewModel._determineTriangleType(equilateral1), 'equilateral');
      assert.equal(viewModel._determineTriangleType(scalene2), 'scalene');
      assert.equal(viewModel._determineTriangleType(scalene3), 'scalene');
      assert.equal(viewModel._determineTriangleType(scalene4), 'scalene');
      assert.equal(viewModel._determineTriangleType(isosceles2), 'isosceles');
      assert.equal(viewModel._determineTriangleType(isosceles3), 'isosceles');


      // @ts-ignore
      assert.isNull(viewModel._determineTriangleType(invalidSides[0]));
    });
  });
});