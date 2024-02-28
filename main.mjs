import crawl from "./crawl.mjs"


async function main(){

    //Obtiene el HTML de Hacker News
    const baseURL = 'https://news.ycombinator.com/'
    const htmlBody = await crawl.fetchHTML(baseURL).then((htmlBody) => {
        return htmlBody;
    }).catch((error) => console.log('Error in fetching on: '+currentURL));
    
    // Guarda el HTML de Hacker News en un archivo
    //await crawl.saveHTMLToFile('https://news.ycombinator.com/', '/your/path/to/hackernews.html');

    //extraer la información del HTML
    const values = crawl.extractInfo(htmlBody);


    //Ejercicio 1
    //Ordenar por comentarios de menor a mayor
    const orderedValuesByComments = crawl.sortByProperty(values, 'comments');
    
    //Filtra los valores con 6 o más palabras en el título
    const orderedValuesByCommentsAndBy6orMoreWordsInTitle = crawl.filterByWordRangeInTitle(orderedValuesByComments, 6);

    



    //Ejercicio 2
    //Ordena por puntos de menor a mayor
    const orderedValuesByPoint = crawl.sortByProperty(values, 'points');

    //filtra los valores con 1 a 5 palabras en el título
    const filteredBy1To5WordsTitle = crawl.filterByWordRangeInTitle(orderedValuesByPoint, 1, 5);
    
    //Imprime los valores
    console.log("Ejercicio 1: ");
    console.log(orderedValuesByCommentsAndBy6orMoreWordsInTitle);

    console.log("\n\n");

    console.log("Ejercicio 2: ");
    console.log(filteredBy1To5WordsTitle);


    process.exit(0);
}

main()