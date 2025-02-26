import { loadPdfData } from "./pdfLoader.js";
import { vectorStore } from "./mongo.js";

async function loadDocuments() {
    const pdfPath = "./Company_Overview_Consolidated.pdf";
    const docs = await loadPdfData(pdfPath);
    const vector = await vectorStore.addDocuments(docs);
    console.log(vector);
}

export { loadDocuments };
