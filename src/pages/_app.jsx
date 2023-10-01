import '@/styles/globals.css'
import '@/styles/reset.css'

import { Layout } from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
