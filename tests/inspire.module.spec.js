import { test, expectTypeOf, expect } from 'vitest'
import * as redsys from "../dist/redsys.umd.cjs"

test('inspire is a function', () => {
  expectTypeOf(redsys.inspire).toBeFunction()
  expect(redsys.inspire()).toBeTypeOf('string')
})