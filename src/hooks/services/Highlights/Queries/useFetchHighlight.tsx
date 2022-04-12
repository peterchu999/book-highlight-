import {
  Highlight,
  HighlightDataSource,
} from "../../../../types/highligth.type";
import { useQuery } from "react-query";
import API from "../../axios";

interface IOptions {
  enabled?: boolean;
  refetchInterval?: number | false;
  onError?: (error: Error) => void;
  onSuccess?: (data: any) => void;
}

export const fetchHighlight = async (): Promise<Highlight[]> => {
  try {
    const highligths: Highlight[] = (await API.get("")).data;
    return highligths;
  } catch (error: any) {
    console.error(
      "services/Highlights/Queries/useFetchHighlight.tsx",
      "fetchHighlight",
      error.data || error.response?.data || error.response || error
    );
    throw error;
  }
};

export const fetchHighlightWithDataSource = async (
  dataSource: HighlightDataSource
): Promise<Highlight[]> => {
  let highlights: Highlight[] = [];
  try {
    highlights = JSON.parse(localStorage.getItem("highlights") || "[]");
    if (highlights.length == 0) {
      highlights = await fetchHighlight();
      localStorage.setItem("highlights", JSON.stringify(highlights));
    }
  } catch (error) {
    highlights = await fetchHighlight();
  }

  switch (dataSource) {
    case HighlightDataSource.RANDOM:
      return highlights.filter((item) => !item?.favorite);
    case HighlightDataSource.FAVORITE:
      return highlights.filter((item) => item?.favorite);
    case HighlightDataSource.CONTENTED:
      return highlights.filter((item) => !item?.contented);
    default:
      return highlights;
  }
};

const useFetchHighlight = (
  dataSource: HighlightDataSource,
  options?: IOptions
) => {
  return useQuery<any, Error>(
    dataSource,
    async () => {
      return await fetchHighlightWithDataSource(dataSource);
    },
    { retry: false, staleTime: 30000, ...options }
  );
};

export default useFetchHighlight;
