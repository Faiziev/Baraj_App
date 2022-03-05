import '../styles/globals.css'
import '../sass/main.scss'
import Layout from '../components/layout.tsx'
import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'


export default function MyApp({ Component, pageProps: {session, ...pageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </SessionProvider>
  )
}

