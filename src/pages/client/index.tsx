import { useState, FormEvent } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { setupAPIClient } from "../../services/api";
import { canSSRGuest } from "@/utils/canSSRGuest";
import { toast } from "react-toastify";
import { Header } from "@/components/Header";

// type itemProps = {
//   id: string;
//   descricao: string;
// };

// interface ServiceProps {
//   categoryList: itemProps[];
// }

export default function Client() {
  return (
    <>
      <Head>
        <title>Novo Proprietário</title>
      </Head>
      <Header />
      <div>
        <main className={styles.container}>
          <h1>Cadastre um Proprietário</h1>
          <form className={styles.form}>
            <div className={styles.nome}>
              <Input placeholder="Nome do Proprietário" />
              <Input placeholder="CPF ou CNPJ" />
            </div>
            <div className={styles.doc}>
              <Input placeholder="Identidade" />
              <Input placeholder="Nrº Habilitação" />
              <Input placeholder="Email" />
              <select className={styles.select}>
                <option>Física</option>
                <option>Jurídica</option>
              </select>
              <Input placeholder="Nome Responsável" />
            </div>
            <h4 className={styles.label}>Endereço</h4>
            <div className={styles.end}>
              <Input placeholder="cep" />
              <Input placeholder="logradouro" />
              <Input placeholder="numero" />
              <Input placeholder="complemento" />
              <Input placeholder="bairro" />
              <select className={styles.select}>
                <option>Belém</option>
                <option>Marituba</option>
              </select>
            </div>
            <Button type="submit" loading={false} className={styles.buttonAdd}>
              Cadastrar
            </Button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
    return {
      props: {},
    };
  });
  
  