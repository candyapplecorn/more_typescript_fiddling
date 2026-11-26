import { numberPyramid, getNextNumber } from "./number_pyramid"


describe('get next number', function () {
  it('should get the next number', function () {

    expect(getNextNumber(9, 1)).toEqual(0)
    expect(getNextNumber(0, 1)).toEqual(1)
  });
});
describe("number pyramid", () => {
  it("should return a pyramid of numbers", () => {
    const result = numberPyramid(3);
    expect(result).toEqual(`1
234 
56789
0123456
789012345
67890123456`)
  })
})
describe.skip("number pyramid", () => {
  it("should return a pyramid of numbers", () => {
    const result = numberPyramid();
    expect(result).toEqual(`1
234 
56789
0123456
789012345
67890123456`)
  })
})
