// Defining types for sanity client
export interface ISanityClient {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
  token: string;
}
