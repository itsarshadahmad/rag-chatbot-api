import { createEmbeddings, embeddings } from "./embeddings.js";
import { vectorStore } from "./mongo.js";
import "dotenv/config";
import { loadDocuments } from "./loadDocuments.js";

// const vectors = await createEmbeddings(docs);
// await loadDocuments();

// console.log("STARTED");
// const similaritySearchResults = await vectorStore.similaritySearch(
//     "Services",
// );
// console.log(similaritySearchResults);

// const retriever = vectorStore.asRetriever(1);

// const retrievedDocuments = await retriever.invoke(
//     "what services are available?"
// );
// console.log(retrievedDocuments);

// console.log(vectorStore);

// const vectorEmbeddings = createEmbeddings("to-let globe");

// const similaritySearchResults = await vectorStore.similaritySearch(
//     "To-let globe",
//     1
// );

// console.log(similaritySearchResults);

// for (const doc of similaritySearchResults) {
//     console.log(`* ${doc.pageContent} [${JSON.stringify(doc.metadata, null)}]`);
// }

// const res = await addEmbeddingsToVectorStore(embeddings);
// console.log(res);

// TODO: Fix RetrievalQAChain issue
// import { RetrievalQAChain } from "langchain/chains";
// const chain = RetrievalQAChain.fromLLMAndRetrievers(
//     model,
//     vectorStore.asRetriever()
// );
