import { PHOTOS } from "@/constants/PHOTOS"
import Image from "next/image";
import styles from '@/styles/Modal.module.css'

export const Modal = ({ show, setShow, number }) => {
  if (show) {
    const thisPhoto = PHOTOS[number];
    return (
      <>
        <div className={`${styles.modalWrap} modalWrap`}>
          <div className={styles.overlay}></div>
          <div className={styles.modal}>
            <Image src={thisPhoto.src} alt={thisPhoto.title} width={600} height={400} className={styles.modalImage} />
            <p className={styles.modalTitle}></p>
            <button className={styles.closeButton} onClick={() => setShow(false)}>閉じる</button>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  }
}