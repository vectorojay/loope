import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  token: "",
});
