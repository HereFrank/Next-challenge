export interface CardData {
    imageLink: string;
    user: string;
    createdAt: string;
    collects: number;
    mirrors: number;
    comments: number;
  }

export type SortMode = "TOP_COMMENTED" | "TOP_COLLECTED" | "TOP_MIRRORED" | "LATEST";
export type ActiveButton = Exclude<SortMode, "TOP_COMMENTED">
