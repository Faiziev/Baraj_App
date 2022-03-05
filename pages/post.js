import Head from 'next/head';
import Link from 'next/link';
import stylex from "@ladifire-opensource/stylex";
import { motion } from "framer-motion";
import Layout from './../components/layout.tsx';
import Post_page from '../components/Pages/post_page';

export default function Post() {
  const variants = {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
      }
  };
  return (
    <>
    <Post_page />
      {/* <main className={stylex(styles.container_1)} layoutId='main' role='banner'>
        <div className={stylex(styles.container_2)}>
          <div className={stylex(styles.container_3)}>
            <div className={stylex(styles.container_4)}>
              <div className={stylex(styles.container_5)}>
                <Link href="/">
                  <motion.figure 
                    variants={variants}
                    layoutId="box"
                    className={stylex(styles.container_box)} 
                    transition={{ type: "spring", bounce: 0, duration: 0.7 }}
                    >

                  </motion.figure >
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Layout /> */}
    </>
  )
}

const styles = stylex.create({
  container_1: {
    MozBoxAlign: 'center',
    alignItems: 'center',
    content: 'default',
    position: 'absolute',
  },
  container_2: {
    width: '98vw',
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
  },
  container_3: {
    backfaceVisibility: 'hidden',
    MozBoxAlign: 'center',
    alignItems: 'center',
    content: 'default',
  },
  container_4: {
    width: '100%',
    minHeight: '100%',
    background: 'var(--background)',
    content: 'default',
    MozBoxAlign: 'stretch',
    alignItems: 'stretch',
    flexGrow: '1',
    MozBoxFlex: '1',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
  },
  container_5: {
    maxWidth: '100%',
    width: '100%',
    height: '90vh',
    display: 'grid',
    placeItems: 'center',
    margin: '0 0 0 0',
    background: 'var(--background)',
    zIndex: '1',
    content: 'default', 
  },
  container_box: {
    width: '90vw',
    height: '80vh',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-1)', 
  },
});
