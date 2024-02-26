import {JSDOM} from 'jsdom';

export function getURLsFromPage(htmlBody, baseURL) {
    
    const urls= []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    
    for (const linkElement of linkElements) {
        if(linkElement.href.slice(0,1)==='/') {
            //Relative
            urls.push(`${baseURL}${linkElement.href}`)
        }else if(linkElement.href.slice(0,4)==='http'){
            //Absolute
            urls.push(linkElement.href)
        }else{
            //ignore
        }

    }
    
    return urls
}

export function normalizeURL(urlString) {
    const urlObject = new URL(urlString);
    const domain = urlObject.hostname;
    const path = urlObject.pathname.endsWith('/') ? urlObject.pathname.slice(0, -1) : urlObject.pathname;
    
    return `${domain}${path}`;
}
