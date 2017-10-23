import {createHash} from 'crypto'

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype.__proto__).forEach((name) => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name]
      }
    })
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name]
      }
    })
  })
}

export function generateID(key: string): string {
  return `${key}-${createHash('md5').update(`${key}-${new Date().toISOString()}`).digest('hex')}`
}
