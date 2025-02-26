import { ChatOllama } from "@langchain/ollama";
import { loadPdfData } from "./pdfLoader.js";
import "dotenv/config";

const pdfPath = "./Company_Overview_Consolidated.pdf";
const docs = await loadPdfData(pdfPath);

import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new OllamaEmbeddings({
    model: "all-minilm:33m", // Default value
    baseUrl: "http://localhost:11434", // Default value
});

// Create a vector store with a sample text
const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
console.log(vectorStore);

// const res = await embeddings.embedQuery("to-let globe");
// console.log(res);

// Use the vector store as a retriever that returns a single document
// const retriever = vectorStore.asRetriever(1);

// // Retrieve the most similar text
// const retrievedDocuments = await retriever.invoke("Where are service available?");

// console.log(retrievedDocuments);

// Define the model
const model = new ChatOllama({
    model: "llama3.2:3b",
});

// TODO: Fix RetrievalQAChain issue
// import { RetrievalQAChain } from "langchain/chains";
// const chain = RetrievalQAChain.fromLLMAndRetrievers(
//     model,
//     vectorStore.asRetriever()
// );

// console.log(chain);

// TODO: Add vector db - mongodb, pinecone

// app.post("/chat", async (req, res) => {
//     const { query } = req.body;
//     const response = await chain.call({ query });
//     res.json({ answer: response.text });
// });
