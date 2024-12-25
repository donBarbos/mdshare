import { useRef, useState } from 'react'

import { Spinner } from '@components/Spinner'

import { SubmitButton } from './SubmitButton'
import { ResultModal } from './ResultModal'
import styles from './styles.module.css'

import type { IErrorResponse, IPostPageRequest, IPostPageResponse } from '@interfaces'

export const UploadForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isModalActive, setModalActive] = useState<boolean>(false)
  const [hasFileChanged, setHasFileChanged] = useState<boolean>(false)
  const [result, setResult] = useState<IPostPageResponse | IErrorResponse | null>(null)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const fileInput = useRef<any>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!hasFileChanged && result !== null) {
      // Return the existing result if the file input has not been changed
      setModalActive(true)
      return
    }

    const file = fileInput.current.files[0]
    const reader = new FileReader()

    reader.readAsText(file)

    reader.onload = async () => {
      const requestBody: IPostPageRequest = {
        text: reader.result as string,
        fileName: fileInput.current.value.replace('C:\\fakepath\\', '').replace(/\.[^/.]+$/, ''),
      }

      await fetch('/api/v1/pages/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((response) => {
          setIsLoading(false)
          setResult(response)
          setModalActive(true)
        })
        .catch((error) => {
          setIsLoading(false)
          setResult({ success: false, message: error.message })
          setModalActive(true)
        })
    }

    setIsLoading(true)
  }

  const handleFileChange = () => {
    setHasFileChanged(true)
  }

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDragging(false)
    const files = event.dataTransfer.files
    if (files.length > 0) {
      fileInput.current.files = files
      handleFileChange()
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label
          className={`${styles.form__label} ${isDragging ? styles.dragging : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <span className={styles.drop__title}>Drag & drop file here</span>
          or
          <input
            className={styles.form__input}
            type="file"
            name="file"
            accept=".md, .txt"
            required
            ref={fileInput}
            onChange={handleFileChange}
          />
        </label>
        <SubmitButton isLoading={isModalActive} />
      </form>
      {isLoading ? <Spinner /> : <></>}
      <ResultModal isActive={isModalActive} setActive={setModalActive} result={result} />
    </>
  )
}
