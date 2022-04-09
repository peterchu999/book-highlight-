import Airtable from "airtable";
import { AIRTABLE_API_KEY } from "../constants";
import {
  IGetAllRecordParams,
  IGetRecordByIdParams,
  IGetTable,
  IUpdateRecords,
} from "../types/airtable.type";

export const getAirTable = ({ baseKey, tableKey }: IGetTable) => {
  Airtable.configure({
    apiKey: AIRTABLE_API_KEY,
    endpointUrl: "https://api.airtable.com",
  });

  return Airtable.base(baseKey).table(tableKey);
};

export const getAllRecords = async ({
  baseKey,
  tableKey,
  view = "Grid view",
}: IGetAllRecordParams) => {
  const records = await getAirTable({ baseKey, tableKey })
    .select({
      view,
    })
    .all();
  return records.map((record) => {
    return { ...record.fields, id: record.id };
  });
};

export const getRecordById = async ({
  baseKey,
  tableKey,
  recordId,
}: IGetRecordByIdParams) => {
  const records = await getAirTable({ baseKey, tableKey }).find(recordId);
  return { ...records.fields, id: recordId };
};

export const updateRecordById = async ({
  baseKey,
  tableKey,
  recordId,
  data,
}: IUpdateRecords) => {
  await getAirTable({ baseKey, tableKey }).update(recordId, { ...data });
};
