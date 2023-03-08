import Sidebar from '@/components/Sidebar';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './layout.module.scss';

interface ChildrenProps {
    children: ReactNode;
}
export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className={styles.main}>
                <Sidebar />
                <section className={styles.content}>{children}</section>
            </main>
        </>
    )
}