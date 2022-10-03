import { TriangleModel } from "~/main-view-model";

const validSides = [
  [1, 4, 4],
  [0.8, 12, 11.9],
  [6, 6, 6],
  [5, 3, 4],
  [8.1, 20, 15.7],
  [47, 32, 65],
  [20, 20, 27]
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

const log = (...message:any) => console.log('[Triangle Model Test]:',...message, '\n');

describe('MainViewModel Test', () => {

  describe('#_validateSideValues', () => {
    it('should return "true" if the values supplied are valid', async () => {
      validSides.forEach(values => {
        log('valid sides', values);
        assert.isTrue(viewModel._validateSideValues(values), 'failed to validate: ' + values);
      })
    })
    it('should return "false" if the values are invalid', async () => {
      invalidSides.forEach(values => {
        log('invalid sides', values);
        // @ts-ignore
        assert.isFalse(viewModel._validateSideValues(values), 'did not prevent validation of invalid sides: ' + values);
      })
    })
  });

  describe('#_determineTriangleType', () => {
    it ('should return the type of triangle to display', async () => {
      const [isosceles1, scalene1, equilateral1, scalene2, scalene3, scalene4, isosceles2] = validSides;
      assert.equal(viewModel._determineTriangleType(isosceles1),'isosceles');
      assert.equal(viewModel._determineTriangleType(scalene1),'scalene');
      assert.equal(viewModel._determineTriangleType(equilateral1),'equilateral');
      assert.equal(viewModel._determineTriangleType(scalene2),'scalene');
      assert.equal(viewModel._determineTriangleType(scalene3),'scalene');
      assert.equal(viewModel._determineTriangleType(scalene4),'scalene');
      assert.equal(viewModel._determineTriangleType(isosceles2),'isosceles');

      // @ts-ignore
      assert.isNull(viewModel._determineTriangleType(invalidSides[0]));
    });    
  });
});