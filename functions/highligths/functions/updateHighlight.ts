import { AIRTABLE_BASE_KEY, AIRTABLE_HIGHLIGHTS_TABLE_KEY } from "../constants";
import { updateRecordById } from "../utils/airtable";
import { response } from "../utils/response";

export const updateHighlight = async (recordId: string, body: string) => {
  try {
    const { contented, favorite } = JSON.parse(body) || {};
    await updateRecordById({
      baseKey: AIRTABLE_BASE_KEY,
      tableKey: AIRTABLE_HIGHLIGHTS_TABLE_KEY,
      recordId,
      data: {
        contented,
        favorite,
      },
    });
    return response({ success: true });
  } catch (error) {
    return response(error, { statusCode: 400 });
  }
};
