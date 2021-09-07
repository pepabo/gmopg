import { createHash } from 'crypto'

export function generateID(key: string): string {
  return `${key}-${createHash('md5').update(`${key}-${new Date().toISOString()}`).digest('hex')}`
}

export type Constructor<T> = new (...args: any[]) => T
