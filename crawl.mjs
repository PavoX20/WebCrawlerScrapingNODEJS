import jsdon from "jsdom";
import fs from "node:fs/promises";

// Función para extraer la información
export function extractInfo(htmlContent) {
  const dom = new jsdon.JSDOM(htmlContent);
  const document = dom.window.document;

  const entries = [];
  const items = document.querySelectorAll("tr.athing");

  items.forEach((item, index) => {
    const rank = item
      .querySelector("td.title > span.rank")
      .textContent.trim()
      .replace(".", "");
    const title = item.querySelector("td.title a").textContent.trim();

    const subtext = item.nextSibling.querySelector("td.subtext");
    const points = subtext.querySelector("span.score")
      ? subtext.querySelector("span.score").textContent.split(" ")[0]
      : "0";

    const commentsLink = subtext.querySelector(
      "span.subline > a[href*='item?id=']"
    );
    let comments = "0"; // Inicializamos 'comments' como "0" en caso de que no se encuentre el enlace de comentarios

    if (commentsLink) {
      // Si se encuentra el enlace de comentarios
      const commentsText = commentsLink.textContent.trim(); // Obtenemos el texto del enlace y eliminamos los espacios en blanco al principio y al final
      const commentsMatch = commentsText.match(/^(\d+)\s*comments$/); // Utilizamos una expresión regular para extraer el número de comentarios
      if (commentsMatch) {
        // Si se encuentra un número válido de comentarios
        comments = commentsMatch[1]; // Actualizamos 'comments' con el número de comentarios extraído
      }
    }

    entries.push({
      rank,
      title,
      points,
      comments,
    });
  });

  return entries;
}

export async function fetchHTML(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // verifica si la respuesta es exitosa (código HTTP 200-299)
      throw new Error("Network response was not ok");
    }
    const html = await response.text(); // obtiene el cuerpo de la respuesta como texto
    return html;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export async function saveHTMLToFile(url, filePath) {
  try {
    const html = await fetchHTML(url);
    if (html) {
      await fs.writeFile(filePath, html, "utf8"); // Guarda el HTML en el archivo especificado
      console.log(`HTML saved to ${filePath}`);
    }
  } catch (error) {
    console.error("Error saving HTML to file: ", error);
  }
}
