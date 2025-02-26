import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new OllamaEmbeddings({
    model: "all-minilm:33m", // Default value
    baseUrl: "http://localhost:11434", // Default value
});

async function createEmbeddings(docs) {
    // Create a vector store with a sample text
    const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
    return vectorStore;
}

// const res = await embeddings.embedQuery("to-let globe");
// console.log(res);

// Use the vector store as a retriever that returns a single document
// const retriever = vectorStore.asRetriever(1);

// // Retrieve the most similar text
// const retrievedDocuments = await retriever.invoke("Where are service available?");

// console.log(retrievedDocuments);

export { createEmbeddings, embeddings };
