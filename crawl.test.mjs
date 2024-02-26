import {normalizeURL} from './crawl.mjs'
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () => {

    const input = 'https://www.example.com'
    const actual = normalizeURL(input)
    const expected = 'www.example.com'
    expect(actual).toBe(expected)
})