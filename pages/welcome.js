import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import stylex from "@ladifire-opensource/stylex";
import Loader from '../components/loader/loader.tsx';
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { getProviders, signIn as SignIntoProvider} from 'next-auth/react';
import FotterComp from '../components/footer.tsx';
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Welcome({ providers }) {
  const [loading, setLoading] = useState(true);
  const [showing, setshowing] = useState(true);
  
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => { 
    if (session) {
      router.push('/home')
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      try {
        setshowing(false);
      }
      catch ({message}) {
        console.log(message)
      }
    }, 5000);
  }, []);


  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y:  0 },
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
      scale: 0,
      transform: 'translate(-50%, -50%)',
      // position: 'absolute',
      transition: {
        ease: 'easeIn',
        duration: 0.8,
      },
    },
  };
  const item2 = {
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
      scale: 0,
      transform: 'translate(-50%, -50%)',
      // position: 'absolute',
      transition: {
        ease: 'easeIn',
        duration: 0.8,
      },
    },
  };
  
  const SignInComp = () => {
    return (
      <>
        {!showing && 
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className={stylex(styles.container_1)}>
            <motion.div className={stylex(styles.container_2)}>
              <motion.div className={stylex(styles.container_3)}>
                {!loading &&
                  <motion.div style={{opacity: '1'}} className={stylex(styles.logo_svg)}>
                    <motion.img 
                      layoutId="main-svg-1" 
                      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 2}} 
                      style={{opacity: '1'}}
                      src={`/images/logo.png`}  
                      className={stylex(styles.svg)}/>
                  </motion.div>
                }
                <motion.div className={stylex(styles.group_1)}>
                  <motion.div className={stylex(styles.signIn)}variants={item}>
                    Sign In
                  </motion.div>
                  <motion.div className={stylex(styles.btn_1)} variants={item}>
                    {/* {Object.values(providers).map((provider) => (
                      <motion.div className={stylex(styles.btn_2)} key={provider.name}>
                        <img src={`/images/glogo.png`}  className={stylex(styles.glogo)}/>
                        <motion.div type='button'className={stylex(styles.btn_title)} onClick={() => SignIntoProvider(provider.id)}>
                          Sign in with {provider.name}
                        </motion.div>
                      </motion.div>
                    ))} */}
                  </motion.div>
                  
                  <motion.div className={stylex(styles.title)} variants={item}>
                    <span className={stylex(styles.span)}>
                        hello this is an example app for my resume it's simple website to buy and sell used items
                        <br/>
                        to create this website i used next js, next ui, next auth, for styling: stylex to make atomic classes, emotion, scss, for backend firebase, firestore and firebase storage 
                    </span>
                  </motion.div>
                </motion.div>
      
              </motion.div>
              <motion.div className={stylex(styles.footer)} variants={item2}>
                <FotterComp />
              </motion.div>
            </motion.div>
          </motion.div>
        }
      </>
    )
  }
  return(
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader />
          </motion.div>
        ) : (
          <>
            <SignInComp />
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}


export async function getServerSideProps(context) {
  const providers = await getProviders();

  const session = await getSession(context)
  return {
    props: {
      providers,
      session,
    },
  };
}

const styles = stylex.create({
  container_1: {
    width: '100vw',
    height: '100vh',
    content: 'default',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_2: {
    width: '100%',
    height: '100%',
    content: 'default',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_3: {
    width: '100%',
    height: '80%',
    content: 'default',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_svg: {
    width: '100%',
    // height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default',
    zIndex: '9999',
    margin: '25px',
  },
  svg: {
    width: '200px',
    postion: 'fixed',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // @ts-ignore
    "@media (max-width: 400px)": {
      width: '150px',
    },
  },
  group_1: {
    width: '100%',
    maxWidth: '600px',
    content: 'default',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: '14px',
    whiteSpace: 'wrap',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    MozBoxFlex: '1',
    flexGrow: '1',
    color: 'var(--color-text-3)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: '30px',
  },
  span: {
    textOverflow: 'ellipsis',
    fontFamily: 'inherit',
    minWidth: '0px',
    overflowWrap: 'break-word',
    whiteSpace: 'inherit',
    maxWidth: '100%',
    overflowY: 'hidden',
    overflowX: 'hidden',
    content: 'default',
  },
  signIn: {
    width: '100%',
    fontWeight: '500',
    fontSize: '17px',
    whiteSpace: 'wrap',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    MozBoxFlex: '1',
    flexGrow: '1',
    color: 'var(--color-text-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    textAlign: 'center',
    margin: '10px',
  },
  btn_1: {
    width: '100%',
    // height: '100%',
    content: 'default',
  },
  btn_2: {
    width: '225px',
    // height: 'px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5px',
    content: 'default',
    cursor: 'pointer',
    border: '2px solid var(--color-border-1)',
    borderRadius: '9999px',
  },
  glogo: {
    width: '30px',
    height: '30px',
    marginRight: '-10px',
  },
  btn_title: {
    fontWeight: '500',
    fontSize: '15px',
    whiteSpace: 'wrap',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    MozBoxFlex: '1',
    flexGrow: '1',
    color: 'var(--color-text-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    textAlign: 'center',
  },
  footer: {

  },
})
