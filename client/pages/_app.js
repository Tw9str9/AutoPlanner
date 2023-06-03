import { useRouter } from "next/router";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
