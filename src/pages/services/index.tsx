import { useState, FormEvent } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import { setupAPIClient } from "../../services/api";
import { canSSRGuest } from "@/utils/canSSRGuest";
import { toast } from "react-toastify";
import { Header } from "@/components/Header";

type itemProps = {
  id: string;
  descricao: string;
};

interface ServiceProps {
  categoryList: itemProps[];
}

export default function Service({ categoryList }: ServiceProps) {
  const [nameService, setNameService] = useState("");

  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] = useState(0);

  function handleChangeCategory(event) {
    setCategorySelected(event.target.value);
  }

  // função para cadastrar serviço

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (nameService === "") {
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post("/servicos", {
      descricao: nameService,
      categoria: {
        id: categories[categorySelected].id,
      },
    });

    toast.success("Cadastrado com Sucesso");

    setNameService("");
  }

  return (
    <>
      <Head>
        <title>Novo Serviço</title>
      </Head>
      <Header />
      <div>
        <main className={styles.container}>
          <h1>Cadastre um Serviço</h1>
          <form className={styles.form} onSubmit={handleRegister}>
            <select
              className={styles.select}
              value={categorySelected}
              onChange={handleChangeCategory}
            >
              {categories.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.descricao}
                  </option>
                );
              })}
            </select>
            <Input
              placeholder="Cadastre seu serviço"
              value={nameService}
              onChange={(e) => setNameService(e.target.value)}
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
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/categorias");
  return {
    props: {
      categoryList: response.data,
    },
  };
});
