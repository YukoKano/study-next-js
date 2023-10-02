import { useState } from "react"
import Image from "next/image"
import styles from '@/styles/Photos.module.css'

import { PHOTOS } from "@/constants/PHOTOS"
import { Modal } from "../Modal/Modal"

export const Photos = () => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  return (
    <>
      <ul className={ styles.list } >
        {PHOTOS.map((value, index) => {
          return ( // return大事
            <li key={index} className={`${styles.photo} imageWrap`} onClick={() => {
              setShow(true);
              setNumber(index);
            }
            }>
              <div >
                <Image src={value.src} alt={ value.title} width={400} height={300}  className={ styles.image } />
              </div>
            </li>
          )
        })}
      </ul>
      <Modal show={show} setShow={setShow} number={number} />
    </>
  )
}
