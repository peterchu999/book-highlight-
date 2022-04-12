import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const withReactQuery =
  (WrappedComponent: React.ComponentType<any>) => (props: any) => {
    console.log("withReactQuery");
    return (
      <QueryClientProvider client={queryClient}>
        <WrappedComponent {...props} />
      </QueryClientProvider>
    );
  };
