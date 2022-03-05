import Head from 'next/head';
import Link from 'next/link';
import stylex from "@ladifire-opensource/stylex";
import { AnimatePresence, motion, useElementScroll, useMotionValue, useTransform } from "framer-motion";
// import P_Home from "../components/Pages/P_Home.tsx"
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Post_page() {
  const a = useMotionValue(0);
  const xRange = [-200, -100, 100, 200]
  const opacityRange = [0, 1, 1, 0]
  const b = 0
  const opacity = useTransform(a, xRange, opacityRange)



  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  const scrolledHeight = useTransform(scrollYProgress, [0, 0.2], ['93vh', '100vh']);
  const scrolledWidth = useTransform(scrollYProgress, [0, 0.2], ['87vw', '100vw']);
  const scrolledBorder = useTransform(scrollYProgress, [0, 0.2], ['16px', '0px']);

  return (
    <>
      
    <div className={stylex(styles.container_5)} >
      <motion.div 
        // variants={variants}
        layoutId="box"
        className={stylex(styles.container_box)} 
        transition={{ type: "spring", bounce: 0, duration: 0.7 }}
        style={{height: scrolledHeight, width: scrolledWidth, borderRadius: scrolledBorder,}}
        >
          <div ref={ref} className={stylex(styles.container_box_2)}>
            {/* <motion.div whileTap={{ x: -200, b: 16 }} className={stylex(styles.trash)} animate={{ x: 0 }} style={{ opacity, a, borderRadius: scrolledBorder}} />
            <motion.div whileTap={{ x:  200, b: 16 }} className={stylex(styles.trash)} animate={{ x: 0 }} style={{ opacity, a, borderRadius: scrolledBorder}} /> */}
            {/* <motion.div className={stylex(styles.trash)} style={{ scale: scale, background: 'red', position: 'fixed',}}/> */}
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
            <div className={stylex(styles.trash)}></div>
          </div>
      </motion.div >
    </div>
    </>
  )
}

const styles = stylex.create({
  container_5: {
    maxWidth: '100%',
    width: '100vw',
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    margin: '0 0 0 0',
    // background: 'var(--field-color)',
    backfaceVisibility: 'transparent',
    // opacity: '0.1',
    zIndex: '1000000',
    content: 'default',
    position: 'fixed',
  },
  container_box: {
    // width: '94vw',
    // height: '94vh',
    // borderRadius: '16px',
    boxShadow: 'var(--shadow-1)', 
    position: 'relative',
    zIndex: '1000000',
    background: 'var(--background)',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container_box_2: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    display: 'block',
  },
  trash: {
    width: '200px',
    height: '150px',
    boxShadow: 'var(--shadow-1)', 
    // borderRadius: '16px',
    margin: 'auto',
    marginTop: '15px',
    borderRadius: '16px',
    marginBottom: '15px',
  },  






  container_1: {
    MozBoxAlign: 'center',
    alignItems: 'center',
    content: 'default',
    position: 'fixed',
    zIndex: '100000',
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
});
