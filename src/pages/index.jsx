import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Image priority src="/fv.JPG" alt="植物と柵の影の写真" width={800} height={600} className={styles.firstView} />
    </>
  )
}
