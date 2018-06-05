/**
 * Generates UUID compatible string which begins with given number or string and filled with letter "a" or given character for the rest.
 * Removes all non UUID compatibale characters (all except numbers and letters between A-F), and trims long input.
 * Used to generate easy to read UUID for testing purposes.
 * @param   {number|string} input       - Input to generate UUID.
 * @param   {number|string} [fill="a"]  - Input to generate UUID.
 * @returns {UUID}                      - UUID which starts with given input and continues with letter "a".
 * @example
 * testUUID("1234567890123456789012345678901234567890"); // 12345678-9012-3456-7890-123456789012
 * testUUID("123"); // 123aaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
 * testUUID("xxx123"); // 123aaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
 * testUUID("xxx123", "b"); // 123bbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb
 */
function uuid(input, fill = "a") {
  if (fill.toString().replace(/[^0-9abcdef]/g, "").length !== 1) {
    throw new Error("Fill option must be 1 character length hex compatible letter (A-F) or number (0-9).");
  }
  fill = fill.toString().replace(/[^0-9abcdef]/g, "");

  const str = input.toString().replace(/[^0-9abcdef]/g, "");
  return [[0, 8], [8, 12], [12, 16], [16, 20], [20, 32]]
    .map(([s, e]) => str.slice(s, e) + fill.repeat(e - s - str.slice(s, e).length))
    .join("-");
}

module.exports = uuid;
