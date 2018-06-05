# fake-uuid

Get deterministic and easy to read UUID for simple id

# Synopsis

```js
const uuid = require("fake-uuid");
uuid("1234567890123456789012345678901234567890"); // 12345678-9012-3456-7890-123456789012
uuid("123"); // 123aaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
uuid("xxx123"); // 123aaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
uuid(123) === uuid(123); // TRUE
uuid("123") === uuid(123); // TRUE
uuid("xxx123") === uuid(123); // TRUE
```

# API

## uuid(input, [fill])

Generates UUID compatible string which begins with given number or string and filled with letter "a" or given character for the rest.
Removes all non UUID compatibale characters (all except numbers and letters between A-F), and trims long input.
Used to generate easy to read UUID for testing purposes.

- `input`: Number or string input to start UUID
- `[fill=a]`: Number or character to fill rest of UUID
