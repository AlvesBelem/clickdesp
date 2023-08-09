import Head from "next/head";
import { canSSRGuest } from "@/utils/canSSRGuest";
import { Header } from "@/components/Header";


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - ClickDesp</title>
      </Head>
      <div>
        <Header />
        <h1>Painel</h1>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
