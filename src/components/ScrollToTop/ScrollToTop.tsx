import { useEffect, useState } from 'react'

import styles from './styles.module.css'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY && currentScrollY > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`${styles.top_link} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      title="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" role="presentation">
        <path
          fillRule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}
