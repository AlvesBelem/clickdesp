import Head from "next/head";
import Image from "next/image";
import logoImg from "../../public/logo clickdesp.png";
import styles from "../styles/home.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { FormEvent, useContext } from "react";
import { canSSRGuest } from "@/utils/canSSRGuest";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "alves@gmail.com",
      password: "123",
    };

    signIn(data);
  }

  return (
    <>
      <Head>
        <title>CLICKDESP - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo clickdesp" />
        <div className={styles.login}>
          <form className={styles.form} onSubmit={handleLogin}>
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
