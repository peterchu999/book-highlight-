export interface Highlight {
  id?: string;
  title?: string;
  description?: string;
  book_name?: string;
  category?: string;
  contented?: boolean;
  favorite?: boolean;
}

export enum HighlightDataSource {
  RANDOM = "RANDOM",
  CONTENTED = "CONTENTED",
  FAVORITE = "FAVORITE",
}
