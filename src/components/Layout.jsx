// 全ページ共通のレイアウト

import { Header }  from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}