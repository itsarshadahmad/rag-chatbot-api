import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

async function loadPdfData(pdfPath) {
    const loader = new PDFLoader(pdfPath, {
        pdfjs: () => import("pdfjs-dist/legacy/build/pdf.mjs"),
    });
    const docs = await loader.load();

    const cleanedDocs = docs.map((doc) => ({
        ...doc,
        pageContent: doc.pageContent.replace(/\n/g, " "), // Replace newlines with space
    }));

    const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
    const splitDocs = await splitter.splitDocuments(cleanedDocs);
    return splitDocs;
}

export { loadPdfData };
