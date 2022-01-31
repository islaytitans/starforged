import type { NextPage } from "next";
import Head from "next/head";
import Region from "../components/sector/Region";
import SettlementCount from "../components/sector/SettlementCount";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Starforged - Sector Generator</title>
        <meta name="description" content="Build a sector for Starforged" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mx-auto flex max-w-xs flex-col pt-6 md:max-w-md lg:max-w-2xl">
        <Region />
        <SettlementCount />
      </section>
    </>
  );
};

export default Home;
