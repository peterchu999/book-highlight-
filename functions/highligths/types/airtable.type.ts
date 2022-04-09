export interface IGetAllRecordParams {
  baseKey: string;
  tableKey: string;
  view?: string;
}
export interface IGetTable {
  baseKey: string;
  tableKey: string;
}

export interface IGetRecordByIdParams {
  baseKey: string;
  tableKey: string;
  recordId: string;
}

export interface Highlight {
  id?: string;
  title?: string;
  description?: string;
  book_name?: string;
  category?: string;
  contented?: boolean;
  favorite?: boolean;
}

export interface IUpdateRecords {
  baseKey: string;
  tableKey: string;
  recordId: string;
  data: Highlight;
}
