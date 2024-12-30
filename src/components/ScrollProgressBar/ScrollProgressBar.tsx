import { useEffect, useState } from 'react'

import styles from './styles.module.css'

export const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState<number>(0)

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = +`${Math.min(totalScroll / windowHeight, 1.0)}`

      setScroll(scroll)
    }

    window.addEventListener('scroll', progressBarHandler)

    return () => window.removeEventListener('scroll', progressBarHandler)
  })

  return (
    <div
      className={styles.progress_bar}
      style={{ transform: `scale(${scroll}, 1)` }}
      role="scrollbar"
      aria-controls="main-content"
      aria-valuenow={scroll * 100}
      aria-valuemin={0}
      aria-valuemax={100}
    ></div>
  )
}
