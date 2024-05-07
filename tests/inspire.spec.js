import { test, expectTypeOf, expect } from 'vitest'
import { inspire } from "../dist/redsys.js"

test('inspire is a function', () => {
  expectTypeOf(inspire).toBeFunction()
  expect(inspire()).toBeTypeOf('string')
})