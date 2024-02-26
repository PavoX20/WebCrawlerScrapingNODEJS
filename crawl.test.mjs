import  {normalizeURL, getURLsFromPage} from  './crawl.mjs'
import  {test, expect} from  '@jest/globals'

test('normalizeURL', () => {

    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toBe(expected)
    
})


test('getURLsFromPage relative', () => {

    const htmlBody = `
    <html>
        <body>
            <a href="/path1/">
                blog.boot dev  1  
            </a>
            <a href="https://blog.boot.dev/path2/">
                blog.boot dev    2
            </a>
            <a href="invalid">
                blog.boot dev    2
            </a>
        </body>
    </html>
    `
    const inputBaseURL = 'https://blog.boot.dev'
    const actual = getURLsFromPage(htmlBody, inputBaseURL)
    const expected = ['https://blog.boot.dev/path1/', 'https://blog.boot.dev/path2/']
    expect(actual).toEqual(expected)
    
})

