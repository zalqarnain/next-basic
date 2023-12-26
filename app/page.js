import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
    <Image src="/cat.jpg" width={500} height={400}/>
    </main>
    </>

  )
}
