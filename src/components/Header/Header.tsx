import { useState, useEffect } from 'react'

import { Navbar } from '@components/Navbar'

import styles from './styles.module.css'

export const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`${styles.header} ${!isVisible ? styles.hidden : ''}`}>
      <Navbar />
    </header>
  )
}
