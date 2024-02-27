import { fetchHTML, saveHTMLToFile, extractInfo } from "./crawl.mjs"


async function main(){
    const baseURL = 'https://news.ycombinator.com/'
    const htmlBody = await fetchHTML(baseURL).then((htmlBody) => {
        return htmlBody;
    }).catch((error) => console.log('Error in fetching on: '+currentURL));
    
    // Ejemplo de uso: Guarda el HTML de Hacker News en un archivo
    //await saveHTMLToFile('https://news.ycombinator.com/', '/Users/pavox20/Documents/Aprendizaje/WebCrawler/WebCrawlerScrapingNODEJS/HTML/hackernews.html');
    const values = extractInfo(htmlBody);
    console.log(values);
    process.exit(0);
}

main()