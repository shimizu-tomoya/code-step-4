import { Inter } from 'next/font/google'
import styles from 'src/components/Header/Header.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Header() {
  return (
    <header>
      <h1 className={styles.heading}>Furniture Design</h1>
      <div>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}
