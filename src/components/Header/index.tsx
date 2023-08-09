import Link from "next/link";
import styles from "./styles.module.scss";
import logoImg from "../../../public/logo_clickdesp_mini.png";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard" legacyBehavior>
          <Image src={logoImg} alt="Logo clickdesp" width={80} />
        </Link>
        <nav className={styles.menuNav}>
          <Link href="/category" legacyBehavior>
            <a>Proprietários</a>
          </Link>
          <Link href="/category" legacyBehavior>
            <a>Categorias</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a>Servicos</a>
          </Link>
          <Link href="/service" legacyBehavior>
            <a>Ordem de Serviço</a>
          </Link>
          <button>
            <FiLogOut color="fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
