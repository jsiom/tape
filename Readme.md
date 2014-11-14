
# Tape

Tape is a simple state recorder which is conceptually similar to a [VCR](http://en.wikipedia.org/wiki/Videocassette_recorder) tape. It monitors an [atom](//github.com/jkroso/cell) and stores a time series of states in an `Array`. It also provides methods for navigating backwards and forwards through these states

## Installation

With [packin](//github.com/jkroso/packin): `packin add jsiom/tape`

then in your app:

```js
var tape = require('tape')
```

## API

### `tape.constructor(atom)`

You will typically only have one `tape` in your app so this module exports an instance rather than the Tape class. To initialize the `Tape` call its `constructor` method with your app's  `Atom`

### `tape.value`

Get the current state of the tape

### `tape.back([n=1])`

Reverses the tape `n` states and sets its `Atom` to that state. If the tape is already at the start it will have no affect

### `tape.forward([n=1])`

The compliment of `tape.back()`

### `tape.backWhile(fn)`

Call `fn(tape.value)`. If it returns `true` call `tape.back(1)` and repeat until `fn(tape.value)` returns `false`
