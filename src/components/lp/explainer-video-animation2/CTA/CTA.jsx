"use client"
// React
import { useState } from "react"
// Styles
import styles from "./CTA.module.scss"
// Components
import VideoModal from "@/src/components/videomodal"

const CTA = ({ text, css, modal = true, css2 }) => {
  const [modalShow, setModalShow] = useState(false)

  const handleClick = () => {
    setModalShow(true)
  }
  return (
    <>
      {modal ? (
        <>
          <button
            type="button"
            className={`${styles.ctaModal} ${css}`}
            onClick={() => handleClick()}
          >
            {text ? text : "Get Started"}
          </button>
          <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: `<a href="javascript:;" aria-label="Live Chat" class="${styles.liveChat} ${css2}">
               Live Chat
             </a>`,
          }}
        />
      )}
    </>
  )
}

export default CTA
