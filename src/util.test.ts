import test from 'ava'
import * as Util from './util'

class Brand {
  public sign() {
  }
}

class Tire extends Brand {
  public rollTire() {
  }
}

class Engine extends Brand {
  public startEngine() {
  }
}

class Car implements Tire, Engine {
  public sign: () => void
  public rollTire: () => void
  public startEngine: () => void
}

Util.applyMixins(Car, [Tire, Engine])

test('.applyMixins mixes other methods', (t) => {
  const car = new Car()
  t.is(typeof car.rollTire, 'function')
  t.is(typeof car.startEngine, 'function')
})

test('.applyMixins mixes prototype chain method', (t) => {
  const car = new Car()
  t.is(typeof car.sign, 'function')
})

test('.generateID returns key with hash', (t) => {
  t.regex(Util.generateID('foo'), /foo-\w{32}/)
})
