import Image from "next/image"
import styles from '@/styles/Photos.module.css'

const photos = [
  {
    title: "hoge",
    src: "/photos/Photo1.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo2.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo3.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo4.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo5.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo6.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo7.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo8.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo9.JPG"
  },{
    title: "hoge",
    src: "/photos/Photo10.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo12.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo13.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo14.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo15.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo16.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo17.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo18.JPG"
  },
  {
    title: "hoge",
    src: "/photos/Photo19.JPG"
  }
]

export const Photos = () => {
  return (
    <>
      <ul className={ styles.list } >
        {photos.map((value, index) => {
          return ( // return大事
            <li key={index} className={ styles.photo }>
              <Image src={value.src} alt={ value.title} width={400} height={300}  className={ styles.image } />
            </li>
          )
        })}
      </ul>
    </>
  )
}
