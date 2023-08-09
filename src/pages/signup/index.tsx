import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/logo clickdesp.png";
import styles from "../../styles/home.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from 'next/link';

export default function Signup() {
  return (
    <>
      <Head>
        <title>CLICKDESP - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo clickdesp" />
        <div className={styles.login}>
          <form className={styles.form}>
            <Input placeholder="Digite seu nome" />
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </form>
          <Link href='/' legacyBehavior>
            <a className={styles.text}>Já tem uma conta? Faça seu login!</a>
          </Link>
        </div>
      </div>
    </>
  );
}
