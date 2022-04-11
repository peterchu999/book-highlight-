import * as React from "react";
import {
  Highlight,
  HighlightDataSource,
} from "../../../../types/highligth.type";
import { useMutation } from "react-query";
import API from "../../axios";
import { useQueryClient } from "react-query";
const updateHighlight = async (params: Highlight) => {
  return await (
    await API.put(`/${params.id}`, params)
  ).data;
};

const useUpdateHighlight = () => {
  const queryClient = useQueryClient();
  return useMutation(updateHighlight, {
    onMutate: async (newResponse: any) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(HighlightDataSource.RANDOM);

      // Snapshot the previous value
      const previous = queryClient.getQueryData(HighlightDataSource.RANDOM);

      // Optimistically update to the new value
      queryClient.setQueryData(HighlightDataSource.RANDOM, (old: any) => {
        return old.map((oldItem: Highlight) => {
          if (oldItem.id === newResponse.id) {
            return { ...oldItem, ...newResponse };
          }
          return oldItem;
        });
      });

      // Return a context object with the snapshotted value
      return { previous };
    },

    onError: (err, newTodo, context: any) => {
      queryClient.setQueryData(
        HighlightDataSource.RANDOM,
        context.previousTodos
      );
    },

    onSettled: (data) => {
      console.log("mine", data.highligth);
      try {
        const highlight: Highlight[] = JSON.parse(
          localStorage.getItem("highlights") || "[]"
        );
        localStorage.setItem(
          "highlights",
          JSON.stringify(
            highlight.map((oldItem: Highlight) => {
              if (oldItem.id === data.highligth.id) {
                return { ...oldItem, ...data.highligth };
              }
              return oldItem;
            })
          )
        );
        queryClient.invalidateQueries(HighlightDataSource.RANDOM);
      } catch {}
    },
  });
};

export default useUpdateHighlight;
