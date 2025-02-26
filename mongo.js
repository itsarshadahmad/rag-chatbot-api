import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(
    process.env.MONGODB_ATLAS_URI || "mongodb://localhost:27017/"
);
const collection = client
    .db(process.env.MONGODB_ATLAS_DB_NAME)
    .collection(process.env.MONGODB_ATLAS_COLLECTION_NAME);

async function addEmbeddingsToVectorStore(embeddings) {
    const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
        collection: collection,
        indexName: "vector_index",
        textKey: "text",
        embeddingKey: "embedding",
    });
    return vectorStore;
}

export { addEmbeddingsToVectorStore, client };
