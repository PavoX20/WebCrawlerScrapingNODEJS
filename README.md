# WebCrawlerScrapingNODEJS

This project consists of a web crawler developed in Node.js that extracts the first 30 entries from the Hacker News website. The web crawler uses scraping techniques to collect information about the title, order number, number of comments, and points for each entry.

## Requirements

- Node.js installed on your system, at least v21.6.1.

## Installation

1. **Clone this repository to your local machine:**
   ```bash
   git clone https://github.com/PavoX20/WebCrawlerScrapingNODEJS.git
3. **Navega hasta el directorio del proyecto:**
   ```bash
   cd WebCrawlerScrapingNODEJS
3. **Install the project dependencies:**
    
        npm install

## Usage
Once the dependencies are installed, you can run the web crawler with the following command:

    npm run start

This will start the web crawler and display the first 30 entries from Hacker News along with the requested information.


## Aditional Features
El web crawler también es capaz de realizar filtrado de las entradas recuperadas:

- **Filter all entries with more than five words in the title, sorted by the number of comments.**

        node main.js filterByTitleLength    

- **Filter all entries with five words or less in the title, sorted by points.**

        node main.js filterByPoints