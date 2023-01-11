// Import Third-party Modules
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Import User-Defined Modules
import { ISanityClient } from "../types/common/sanity.client.interface";

// Defining an instance of sanity client
export const sanityClientConfig: any = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID || "4nz0vt47",
  dataset: "production",
  apiVersion: "2023-01-10",
  useCdn: true,
  token: process.env.SANITY_PROJECT_TOKEN,
});

// Create a builder using sanity client configuration
const builder = imageUrlBuilder(sanityClientConfig);

// Utility function to convert image type data to string formatted img element source
export const urlFor = (source: SanityImageSource | string): any => {
  // Convert image type to valid url and then to string for src property of image
  return builder.image(source).toString();
};
