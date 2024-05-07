import { test, expectTypeOf, expect } from 'vitest'
import * as myLibrary from "../dist/myLibrary.umd.cjs"

test('inspire is a function', () => {
  expectTypeOf(myLibrary.inspire).toBeFunction()
  expect(myLibrary.inspire()).toBeTypeOf('string')
})