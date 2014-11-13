var Atom = require('cell')
var tape = require('..')

tape.constructor(new Atom(1))

it('should track the latest value of its atom', function(){
  assert(tape.value == 1)
  tape.atom.set(2)
  assert(tape.value == 2)
  tape.atom.set(3)
  assert(tape.value == 3)
})

it('back', function(){
  tape.back()
  assert(tape.value == 2)
  tape.back()
  assert(tape.value == 1)
  tape.back()
  assert(tape.value == 1)
})

it('forward', function(){
  tape.forward()
  assert(tape.value == 2)
  tape.forward()
  assert(tape.value == 3)
  tape.forward()
  assert(tape.value == 3)
})

it('backWhile', function(){
  tape.backWhile(function(n){ return n != 3 })
  assert(tape.value == 3)
  tape.backWhile(function(n){ return n != 1 })
  assert(tape.value == 1)
})

it('should delete forward states when an old state is modified', function(){
  tape.atom.set(0)
  assert(tape.value == 0)
  tape.forward()
  assert(tape.value == 0)
})
