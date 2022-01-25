import type { NextPage } from "next";
import Head from "next/head";
import Region from "../components/settlements/Region";
import SettlementCount from "../components/settlements/SettlementCount";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Starforged - Starting Sector</title>
        <meta name="description" content="Build a starting sector for Starforged" />
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
