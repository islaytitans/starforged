import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import SectorProvider from "../providers/SectorProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectorProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SectorProvider>
  );
}

export default MyApp;
