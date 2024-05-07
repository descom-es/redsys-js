import { test, expectTypeOf, expect } from 'vitest'
import { inspire } from "../dist/myLibrary.js"

test('inspire is a function', () => {
  expectTypeOf(inspire).toBeFunction()
  expect(inspire()).toBeTypeOf('string')
})