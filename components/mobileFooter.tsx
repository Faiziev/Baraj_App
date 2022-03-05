import stylex from "@ladifire-opensource/stylex";
import Link from "next/link";
import { motion, } from "framer-motion";
import { useSession } from "next-auth/react";
import { Button } from '@nextui-org/react';
import { useRouter } from "next/router";


export const MobilFooter = () => {
  
  const svg_models = [
    <><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></>,
    <><path xmlns="http://www.w3.org/2000/svg" d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></>,
  ];
  const svg_models2 = [
    <path xmlns="http://www.w3.org/2000/svg" d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/>,
    <><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></>
  ];
  const navigation_titles = [
    'Home',
    'Notifications',
    'Messages',
    'Profile',
  ];
  const navigation_titles2 = [
    'About Webiste',
    'Terms',
    'Privacy Policy'
  ]
  const url1 = [
    'home',
    'notifications',
    'messages',
    'profile',
  ]
  const url2 = [
    'about',
    'terms',
    'privacy'
  ]
  const itemIds = [0, 1];
  const MenuItem = ({ i }) => {
    return (
      <motion.li
        className={stylex(styles.li)}
      > 
        <Link href={`/${url1[i]}`} >
          <a className={stylex(styles.li_container_1)} aria-label={url1[i]} role="link">
            <div className={stylex(styles.li_container_2)}>
                <div className={stylex(styles.li_container_3)}>
                  <svg className={stylex(styles.li_container_svg)} fill={router.pathname == `/${url1[i]}` ? "var(--color-text-2) " : "var(--icon-1) "} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">{svg_models[i]}</svg>
                </div>
            </div>
          </a>
        </Link >
      </motion.li>
    );
  };
  const MenuItem2 = ({ i }) => {
    return (  
      <motion.li className={stylex(styles.li)}> 
        <Link href={`/${url2[i]}`} >
          <a className={stylex(styles.li_container_1)} aria-label={url2[i]} role="link">
            <div className={stylex(styles.li_container_2)}>
                <div className={stylex(styles.li_container_3)}>
                  <svg className={stylex(styles.li_container_svg)} fill={router.pathname == `/${url2[i]}` ? "var(--color-text-2) " : "var(--icon-1) "} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">{svg_models2[i]}</svg>
                </div>
            </div>
          </a>
        </Link >
      </motion.li>
    );
  };
  const SuperButton = () => {
    return (
      <>
        <Link 
          href={`/home?create`} 
          as={`/create/select`}
          scroll={false}>
          <motion.div   
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={stylex(styles.post_btn_container_1)} >
            <div className={stylex(styles.post_btn_container_2)} type="button">
              <div className={stylex(styles.post_btn_container_3)}>
                <div className={stylex(styles.post_btn_container_4)}>
                  <svg className={stylex(styles.post_btn_container_svg)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="add_icon" d="M10 1.00001V10M10 19V10M10 10H19H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>              
                </div>
              </div>
            </div>
            <div className={stylex(styles.post_btn_container_shadow)}></div>
          </motion.div>
        </Link>
      </>
    )
  }
  
  const { data: session } = useSession(); 
  const router = useRouter();
  return (
    <>
      <motion.footer className={stylex(styles.container_footer_1)}
        role="banner">
        <div className={stylex(styles.container_footer_2)} style={{ visibility: 'revert' }}>
          <div className={stylex(styles.container_footer_3)}>
            {session ? 
              <div className={stylex(styles.container_footer_4)}>
                <div className={stylex(styles.group_container_1)}>
                  <div className={stylex(styles.svg_border_div)}>
                    <svg className={stylex(styles.svg_border)} width="1512"  viewBox="0 0 1512 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path xmlns="http://www.w3.org/2000/svg" d="M594.5 1H-4740V192.5H6641V1H917C880.5 7 869.5 41.5 868.5 47.5C867.5 53.5 844 132.5 755.5 132.5C684.7 132.5 651.333 75.8333 643.5 47.5C637.1 15.1 608.167 3 594.5 1Z"/>
                    </svg>
                  </div>
                  <nav className={stylex(styles.nav)}>
                    {/* <h1>asdasdsadasdadasds</h1> */}
                    <motion.ul className={stylex(styles.ul)}>
                      <MenuItem i={0} key={0} />
                      <MenuItem i={1} key={1} />
                      <div className={stylex(styles.super_container)}>
                        <SuperButton />
                      </div>
                      <MenuItem2 i={0} key={0} />
                      <MenuItem2 i={1} key={1} />
                    </motion.ul>
                  </nav> 
                </div>
              </div>
            :
              <div className={stylex(styles.container_footer_5)}>
                <Button size="lg" auto  color="warning" auto onClick={() => router.push('/welcome')}>
                    Sign In
                </Button>
              </div>
            }
          </div>
        </div>
      </motion.footer>
    </>
  )
}


const styles = stylex.create({
  container_footer_1: {
    content: 'default',
    MozBoxFlex: '1',
    flexGrow: '1',
    alignItems: 'center',
    zIndex: '3',
    userSelect: 'none',
    width: '100vw',
    position: 'fixed',
    // height: '50px',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },
  container_footer_2: {
    content: 'default',
    width: '100wv',
    // height: '50px',
    position: 'fixed',
    backfaceVisibility: 'hidden',
    overflow: 'hidden',
    zIndex: '3',
  },
  container_footer_3: {
    content: 'default',
    height: '70px',
    backfaceVisibility: 'hidden',
    bottom: '0px',
    position: 'fixed',
    // justifyContent: 'flex-end'
  },
  container_footer_4: {
    content: 'default',
    overflowY: 'hidden',
    MozBoxPack: 'justify',
    justifyContent: 'center',
    width: '100vw',
    height: '70px',
    paddingLeft: '12px',
    paddingRight: '12px',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid var(--color-border-1)',
    // background: 'var(--background)'
  },
  container_footer_5: {
    content: 'default',
    overflowY: 'hidden',
    justifyContent: 'center',
    width: '100vw',
    height: '50px',
    position: 'absolute',
    // bottom: '0px',
    paddingLeft: '12px',
    paddingRight: '12px',
    display: 'flex',
    flexDirection: 'row',
    bordertop: '1px solid var(--color-border-1)',
    // background: 'var(--background)'
  },
  group_container_1: {
    width: '100%',
    height: '50px',
    alignItems: 'flex-strat',
    justifyContent: 'flex-end',
    content: 'default',
  },
  svg_border_div: {
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default',
  },
  svg_border: {
    marginTop: '2px',
    height: 50,
    position: 'absolute',
    fill: 'var(--background)',
    stroke: 'var(--icon-1)',
    // paddingBottom: '40px',
    bottom: '-10px',
    overflow: 'clip',
  },
  nav: {
    width: '100%',
    maxWidth: '400px',
    height: '50px', 
    content: 'default',
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: '#ccc',
    position: 'absolute',
    bottom: '-10px',
  },
  ul: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    content: 'default',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  li_container_1:{
  },
  li_container_2:{
  },
  li_container_3:{
  },
  li_container_svg:{
    position: 'relative',
    maxWidth: '30px',
    maxHeight: '30px',  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '6px',
    // marginTop: '5px',
    userSelect: 'none',
    // paddingRight: '10px',
  },
  super_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default '
  },
  post_btn_container_1: {
    width: '50px',
    height: '50px',
    position: 'absolute',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    userSelect: 'none',
    background: 'var(--gradient-1)',
    zIndex: '999999',
  },
  post_btn_container_shadow: {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    userSelect: 'none',
    background: 'var(--gradient-1)',
    backgroundSize: '350% 350% !important',
    animation: 'gradient 10s ease infinite',
    filter: 'blur(6px) !important',
    position: 'absolute',
    marginTop: '10px',
    zIndex: '7777',
  },
  post_btn_container_2: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    userSelect: 'none',
    background: 'inherit',
    backgroundSize: '350% 350% !important',
    animation: 'gradient 10s ease infinite',
    zIndex: '8888',
  },

  post_btn_container_3: {
    content: 'default',
  },

  post_btn_container_4: {
    content: 'default',
  },
  post_btn_container_svg: {
    position: 'relative',
    maxWidth: '35px',
    maxHeight: '35px',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
})