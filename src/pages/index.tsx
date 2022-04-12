import * as React from "react";
import HighlightCard from "../components/HighlightCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { withHighlightQuery } from "../hoc/withHighlightQuery";
import { withReactQuery } from "../hoc/withReactQuery";
import { Highlight, HighlightDataSource } from "../types/highligth.type";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = ({ location, error, isFetching, data, refetch }: any) => {
  console.log(data, error);
  return (
    <main style={pageStyles} className="min-h-screen p-6 dark:bg-slate-800">
      <title>Home Pages</title>
      <Navbar />
      <div className="flex justify-between items-center">
        <h1 className="text-5xl dark:text-slate-200">Hi Welcome Peter!</h1>
        <button className="px-10 py-4 text-xl bg-slate-800 dark:bg-slate-200 text-slate-200 dark:text-slate-800 hover:bg-slate-600 hover:dark:bg-slate-300">
          Tap To Generate Random Highlights
        </button>
      </div>

      {isFetching && <Loader />}
      {error && <h1>Error Bro</h1>}
      {data && <HighlightCard highlight={data[0]} />}
    </main>
  );
};

export default withReactQuery(
  withHighlightQuery(IndexPage, HighlightDataSource.RANDOM)
);
