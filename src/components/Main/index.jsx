import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'src/components/Header/Header.module.css'
import { images } from '../../../next.config';

const inter = Inter({ subsets: ['latin'] })

const goods = [{
  image: "public/img/item1.jpg",
  name : "プロダクトタイトルプロダクトタイトル",
  price: "¥99,999"
}];

export function Main() {
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
        </div>
      </main>
  )
}
