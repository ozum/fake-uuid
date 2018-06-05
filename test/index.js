const Code = require("code");
const Lab = require("lab");
const uuid = require("../lib");

const { describe, it } = (exports.lab = Lab.script());
const { expect } = Code;

describe("uuid", () => {
  it("should return uuid", () => {
    expect(uuid(1)).to.equal("1aaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa");
  });

  it("should return uuid with custom filler", () => {
    expect(uuid(1, "b")).to.equal("1bbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb");
  });

  it("should trim long input", () => {
    expect(uuid("1bbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb999999999")).to.equal("1bbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb");
  });

  it("should throw non-compatible filler", () => {
    expect(() => uuid(1, "x")).to.throw(/^Fill option must be/);
  });
});
