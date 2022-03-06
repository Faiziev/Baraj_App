//@ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import stylex from "@ladifire-opensource/stylex";

import Image from "./Image.tsx";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transform: 'translate(-50%, -50%)',
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    top: '37%',
    left: '42%',
    scale: 0,
    transform: 'translate(-50%, -50%)',
    // position: 'absolute',
    transition: {
      ease: 'easeIn',
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, scale: 0.80 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const banner = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const letterAni = {
  initial: { y: 500, opacity: 0},
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.div
    className={stylex(styles.span_container)}
    variants={banner}
    initial='initial'
    animate='animate'
    exit='exit'>
    {[...title].map((letter) => (
      <motion.span
        className={stylex(styles.span_2)}
        variants={letterAni}
        // initial='initial'
        // animate='animate'
        >
        {letter}
      </motion.span>
    ))}
  </motion.div>
);

const Loader = ({ setLoading }) => {
  return (
    <>
      <motion.div className={stylex(styles.container_1)}>
        <motion.div className={stylex(styles.container_2)} 
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit">
        <motion.div className={stylex(styles.group_2)}>
          <motion.div className={stylex(styles.loading_childs)}><ImageBlock variants={item} id="laoding-a" /></motion.div>
          <motion.div className={stylex(styles.loading_childs)}><ImageBlock variants={item} id="laoding-b" /></motion.div>
          <motion.div className={stylex(styles.loading_childs)}><ImageBlock variants={item} id="laoding-d" /></motion.div>
          <motion.div className={stylex(styles.loading_childs)}><ImageBlock variants={item} id="laoding-c" /></motion.div>
          <motion.div className={stylex(styles.loading_childs)}><ImageBlock variants={item} id="laoding-e" /></motion.div>
        </motion.div>
        <motion.div className={stylex(styles.group_1)}>
          <motion.div style={{opacity: '1'}} variants={itemMain} className={stylex(styles.logo_svg)}>
            <motion.img src={`/images/logo.png`} layoutId="main-svg-1" style={{opacity: '1'}} className={stylex(styles.svg)}/>
          </motion.div>
          <motion.div variants={banner} className={stylex(styles.laoding_title)}>
            <AnimatedLetters title={'welcome'}  />
          </motion.div>
        </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={`/images/${id}.jpg`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;


const styles = stylex.create({
  container_1: {
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default',
    overflow: 'hidden',
  },
  container_2: {
    width: '100%',
    height: '100%',
    content: 'default',
    display: 'flex',
    alignItems: 'center',   
    justifyContent: 'center',
  },
  group_1: {
    width: '100%',
    position: 'absolute',
    content: 'default',
    paddingTop: '15%',
  },
  logo_svg: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default',
    zIndex: '9999',
  },
  svg: {
    width: '250px',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformOrigin: 'center',
    top: '50%',
    // @ts-ignore
    "@media (max-width: 860px)": {
      width: "30vw",
    },
  },
  laoding_title: {
    content: 'default',
    width: '100%',
  },
  span_container: {
    width: 'fit-content',
    minWidth: '0px',
    // height: '200px',
    position: 'relative',

    display: 'flex',
    flexGrow: '1',
    MozBoxFlex: '1',
    justifyContent: 'space-between',
    alignItems: 'center',
    MozBoxAlign: 'center',
    flexDirection: 'row',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',

    userSelect: 'none',
    letterSpacing: '-0.8rem',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-1)',
    fontSize: '15rem',
    fontWeight: '600',
    overflowWrap: 'break-word',
    overflow: 'hidden',
    // color: 'var(--title)',
    background: 'var(--gradient-1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    content: 'default font',
    textAlign: 'center',
    zIndex: '10',
    // @ts-ignore
    "@media (max-width: 860px)": {
      fontSize: '25vw',
      width: '95vw',
    },
  },
  span_2: {
    content: 'font default',
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minwidth: '0px',
    font: 'inherit',
    color: 'inherit',
    whiteSpace: 'inherit',    
    // position: 'fixed',
  },
  group_2: {
    width: '100%',
    height: '100%',
    content: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading_childs: {
    maxWidth: '300px',
  },
})