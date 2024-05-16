"use client"

import React, { useEffect } from 'react'
import styles from './submit-button.module.scss'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({text, type} : any) => {
    const { pending } = useFormStatus()
    
    useEffect(() => {
      console.log(pending);
    }, [pending])

  return (
    <button className={styles["btn-submit"]} type={type} disabled={pending}>
        Submit {pending && '...'}
    </button>
  )
}

export default SubmitButton