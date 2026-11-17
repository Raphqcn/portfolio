import type { Site } from "~/types/content";

// Site identity (server/assets/site.yml), fetched once and shared by every component
export const useSite = () =>
    useFetch<Site>("/api/site", { key: "site", dedupe: "defer" });
