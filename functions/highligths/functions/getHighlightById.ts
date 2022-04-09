import { AIRTABLE_BASE_KEY, AIRTABLE_HIGHLIGHTS_TABLE_KEY } from "../constants";
import { getRecordById } from "../utils/airtable";
import { response } from "../utils/response";

export const getHighlightById = async (recordId: string) => {
  try {
    const record = await getRecordById({
      baseKey: AIRTABLE_BASE_KEY,
      tableKey: AIRTABLE_HIGHLIGHTS_TABLE_KEY,
      recordId,
    });
    return response(record);
  } catch (error) {
    return response({ error }, { statusCode: 400 });
  }
};
