import { TypedStorageFactory } from "./factory";
import { TypedStorage } from "./any";
import { NumberTypedStorage } from "./number";
import { ArrayTypedStorage } from "./array";
import { BooleanTypedStorage } from "./boolean";
import { generateRandomKey } from "./__test__/helper";

describe("TypedStorageFactory", () => {
  describe("When calling create with number value", () => {
    it("should return instance of NumberTypedStorage", () => {
      const typed = TypedStorageFactory.create(generateRandomKey(), 0);
      expect(typed).toBeInstanceOf(NumberTypedStorage);
    });
  });

  describe("When calling create with boolean value", () => {
    it("should return instance of BooleanTypedStorage", () => {
      const typed = TypedStorageFactory.create(generateRandomKey(), false);
      expect(typed).toBeInstanceOf(BooleanTypedStorage);
    });
  });

  describe("When calling create with array value", () => {
    it("should return instance of ArrayTypedStorage", () => {
      const typed = TypedStorageFactory.create(generateRandomKey(), []);
      expect(typed).toBeInstanceOf(ArrayTypedStorage);
    });
  });

  describe("When calling create with any other value", () => {
    it("should return instance of TypedStorage", () => {
      const typed = TypedStorageFactory.create(generateRandomKey(), null);
      expect(typed).toBeInstanceOf(TypedStorage);
    });
  });
});
