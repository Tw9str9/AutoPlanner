import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>AutoPlanner NL</title>
        <meta
          name="description"
          content="AutoPlanner NL is een merkonafhankelijk autobedrijf in Ter Aar en richt zich op het verkopen van betrouwbare occasions tegen scherpe prijzen onder het kwaliteitslabel 10-voudige AutoPlanner."
          key="desc"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
