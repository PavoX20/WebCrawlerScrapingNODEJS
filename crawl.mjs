export function normalizeURL(URLString){
    const urlObject = new URL(URLString)
    return '${urlObject.hostname}${urlObject.pathname}'
}