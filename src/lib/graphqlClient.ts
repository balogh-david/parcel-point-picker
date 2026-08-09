import { GraphQLClient } from "graphql-request";
import { requireEnv } from "./env";

let client: GraphQLClient | null = null;

export function getGraphqlClient(): GraphQLClient {
  if (client) {
    return client;
  }

  const endpoint = requireEnv("VITE_PICKUP_API_ENDPOINT");

  client = new GraphQLClient(endpoint);

  return client;
}
