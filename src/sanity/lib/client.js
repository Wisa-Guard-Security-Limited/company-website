import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, NEXT_WRITE_TOKEN } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: NEXT_WRITE_TOKEN
});
