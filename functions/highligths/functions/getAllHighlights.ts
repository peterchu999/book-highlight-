import {
  AIRTABLE_BASE_KEY,
  AIRTABLE_HIGHLIGHTS_TABLE_KEY,
} from "../../constants";
import { Highlight } from "../../types/airtable.type";
import { getAllRecords } from "../../utils/airtable";
import { response } from "../../utils/response";

export const getAllHighlights = async () => {
  try {
    const allRecord = await getAllRecords({
      baseKey: AIRTABLE_BASE_KEY,
      tableKey: AIRTABLE_HIGHLIGHTS_TABLE_KEY,
    });
    return response(allRecord);
  } catch (error) {
    return response({ error }, { statusCode: 400 });
  }
};
