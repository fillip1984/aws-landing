import Head from "next/head";
import { useEffect } from "react";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data } = api.example.getAll.useQuery();

  useEffect(() => {
    if (data) {
      console.log("data was fetched from db?", data);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>illizen - home</title>
        <meta name="description" content="Home landing page for illizen" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="container mx-auto mt-12">
        <div className="greetings-container">
          <h2>Welcome, to illizen...</h2>
          <p>
            This is a work in progress but will eventually be a hub for personal
            projects that I build.
          </p>
          {hello && <p>{hello.data?.greeting}</p>}
        </div>
      </main>
    </>
  );
}
