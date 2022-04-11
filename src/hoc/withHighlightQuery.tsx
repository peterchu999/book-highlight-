import * as React from "react";
import useFetchHighlight from "../hooks/services/Highlights/Queries/useFetchHighlight";
import { Highlight, HighlightDataSource } from "../types/highligth.type";
import { QueryClient, QueryClientProvider } from "react-query";

export interface IWithHighlightScreenProps {
  location: any;
  error?: any;
  isFetching?: boolean;
  data?: Highlight[] | [];
  refetch?: any;
}

const queryClient = new QueryClient();

export const withHighlightQuery =
  (
    WrappedComponent: React.ComponentType<IWithHighlightScreenProps>,
    dataSource: HighlightDataSource
  ) =>
  ({ location }: any) => {
    const { error, isFetching, data, refetch } = useFetchHighlight(dataSource);
    return (
      <WrappedComponent
        location={location}
        error={error}
        isFetching={isFetching}
        data={data}
        refetch={refetch}
      />
    );
  };
