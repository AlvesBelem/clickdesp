import { useState, FormEvent } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { setupAPIClient } from "../../services/api";
import { toast } from "react-toastify";
import { canSSRGuest } from "@/utils/canSSRGuest";
import { Header } from "@/components/Header";



export default function Category() {
  const [name, setName] = useState("");

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (name === "") {
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post("/categorias", {
      descricao: name,
    });

    toast.success("Cadastrado com Sucesso")

    setName("");
  }

  return (
    <>
      <Head>
        <title>Nova Categoria</title>
      </Head>
      <Header/>
      <div>
        <main className={styles.container}>
          <h1>Cadastre uma Categoria</h1>
          <form className={styles.form} onSubmit={handleRegister}>
            <Input
              placeholder="Cadastre sua Categoria"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

