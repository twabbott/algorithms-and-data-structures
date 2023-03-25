const { arrayContains } = require("./arrayTools");

describe("arrayTools", () => {
  describe("arrayContains", () => {
    it("should throw an exception if array is null/undefined", () => {
      expect(() => {
        arrayContains(undefined, 100);
      }).toThrow('Parameter "data" must be an array');
    });

    it("should return false for empty array", () => {
      const count = arrayContains([], 100);
      expect(count).toBe(false);
    });

    it("should return FALSE if the array DOES NOT have the item", () => {
      const count = arrayContains([1, 2, 3], 100);
      expect(count).toBe(false);
    });

    it("should return TRUE if the array DOES HAVE the item", () => {
      const count = arrayContains([1, 2, 100, 3], 100);
      expect(count).toBe(true);
    });
  });
});
