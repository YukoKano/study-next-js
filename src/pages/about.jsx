import Image from "next/image";
import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <>
      <h2>私について</h2>
      <Image priority src="/me.jpg" alt="加能のプロフィール写真" width={200} height={200} className={styles.image} />
      <dl className={styles.contents}>
        <div className={styles.box}>
          <dt className={styles.title}>名前</dt>
          <dd>加能</dd>
        </div>
        <div className={styles.box}>
          <dt className={styles.title}>生年月日</dt>
          <dd>1999/01/03</dd>
        </div>
        <div className={styles.box}>
          <dt className={styles.title}>経歴</dt>
          <dd>
            <ol className={styles.olist}>
              <li>大学卒業</li>
              <li>会社入社</li>
            </ol>
          </dd>
        </div>
        <div className={styles.box}>
          <dt className={styles.title}>スキル・資格</dt>
          <ul className={styles.ulist}>
            <li>
              <dd>HTML</dd>
            </li>
            <li>
              <dd>CSS</dd>
            </li>
            <li>
              <dd>JavaScript</dd>
            </li>
            <li>
              <dd>写真撮影</dd>
            </li>
            <li>
              <dd>動画制作</dd>
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <dt className={styles.title}>SNS</dt>
          <ul className={styles.ulist}>
            <li>
              <dd>X(旧Twitter)</dd>
            </li>
            <li>
              <dd>Instagram</dd>
            </li>
          </ul>
        </div>
      </dl>
    </>
  )
}

export default About;