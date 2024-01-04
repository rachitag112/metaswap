import { Header } from "@/components/Header"
import { Swap } from "@/components/Swap"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className= {styles.header}>
        <Header />
      </div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>
      <h1 className={styles.h1}>MetaSwap</h1>
      <div className= {styles.swap}>
      <Swap />
      </div>
    </div>
  );
}