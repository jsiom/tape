var max = Math.max
var min = Math.min

function Tape(atom) {
  this.atom = atom
  this.states = [atom.value]
  this.index = 0
  this.replacing = false
  atom.addListener(this.add.bind(this))
}

Object.defineProperty(Tape.prototype, 'value', {
  get: function(){ return this.states[this.index] }
})

Tape.prototype.add = function(newState) {
  if (this.replacing) return
  this.states[++this.index] = newState
  this.states.length = this.index + 1
}

Tape.prototype.replace = function(i) {
  if (i != this.index) {
    this.index = i
    this.replacing = true
    this.atom.set(this.value)
    this.replacing = false
  }
  return this.atom.value
}

Tape.prototype.back = function(n) {
  if (typeof n != 'number') n = 1
  return this.replace(max(this.index - n, 0))
}

Tape.prototype.forward = function(n) {
  if (typeof n != 'number') n = 1
  return this.replace(min(this.index + n, this.states.length - 1))
}

Tape.prototype.backWhile = function(fn) {
  for (var i = this.index; i >= 0; i--) {
    if (!fn(this.states[i])) break
  }
  return this.replace(i)
}

module.exports = Object.create(Tape.prototype)
