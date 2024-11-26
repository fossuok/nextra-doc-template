import "../styles/tailwind.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <title>Foss UOK design Guidelines</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
