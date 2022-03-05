//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { Avatar } from '@nextui-org/react';
import { useSession } from "next-auth/react";

export const Header_buttons = () => {
  const [postbtn, setPostbtn] = React.useState(false);
  const [notibtn, setNotibtn] = React.useState(false);
  const [profbtn, setProfbtn] = React.useState(false);


  
  const { data: session } = useSession();
  const { asPath } = useRouter()
  return (
    <>
      {/* <Post_btn {...{ postbtn, setPostbtn }}/> */}
      <Notification_btn {...{ notibtn, setNotibtn }}/>
      <Settings_btn {...{ profbtn, setProfbtn }}/>
      <Link 
        href={`/home?create`} 
        as={`/create/select`}
        scroll={false}>
        <motion.div   
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
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
      
      {/* Notification Icon */}
      <motion.div
        className={stylex(styles.noti_btn_container_1)} >
        <div className={stylex(styles.noti_btn_container_2)} type="button" >
          <div className={stylex(styles.noti_btn_container_3)}>
            <div className={stylex(styles.noti_btn_container_4)}>
              <svg className={stylex(styles.noti_btn_container_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"/></svg>             
            </div>
          </div>
        </div>
      </motion.div>
      <div type="button" style={{marginRight: '20px'}} className={stylex(styles.default)} onClick={() => setProfbtn((profbtn) => !profbtn)}>
        <Avatar src={session?.user?.image} css={{ size: "$10" }} />
      </div>
    </>
  );
}

const Post_btn = ({ postbtn = false, setPostbtn = () => {} }) => {
  return (
    <>
      <AnimatePresence> 
        {postbtn && (
          <>
            <motion.div 
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            className={stylex(styles.noti_btn_box_container_1)}>
              <div className={stylex(styles.noti_btn_box_container_2)}>
                <div className={stylex(styles.noti_btn_box_container_3)} role="group" tabindex="0" >
                  <div className={stylex(styles.noti_btn_box_container_4)}>
                      <div className={stylex(styles.noti_btn_box_container_5)}>
                        <div className={stylex(styles.noti_btn_box_container_6)}>
                            <svg className={stylex(styles.noti_btn_box_container_7_svg)} viewBox="0 0 24 24" aria-hidden="true" >
                              <g>
                                  <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"></path>
                              </g>
                            </svg>
                            <div className={stylex(styles.noti_btn_box_container_8)}></div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              type="button"
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              onClick={() => setPostbtn((postbtn) => !postbtn)}
              onKeyDown={() => setPostbtn((postbtn) => !postbtn)}
              className={stylex(styles.hidder_box)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
const Notification_btn = ({ notibtn = false, setNotibtn = () => {} }) => {
  return (
    <>
      <AnimatePresence> 
        {notibtn && (
          <>
            <motion.div 
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            className={stylex(styles.noti_btn_box_container_1)}>
              <div className={stylex(styles.noti_btn_box_container_2)}>
                <div className={stylex(styles.noti_btn_box_container_3)} role="group" tabindex="0" >
                  <div className={stylex(styles.noti_btn_box_container_4)}>
                      <div className={stylex(styles.noti_btn_box_container_5)}>
                        <div className={stylex(styles.noti_btn_box_container_6)}>
                            <svg className={stylex(styles.noti_btn_box_container_7_svg)} viewBox="0 0 24 24" aria-hidden="true" >
                              <g>
                                  <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"></path>
                              </g>
                            </svg>
                            <div className={stylex(styles.noti_btn_box_container_8)}></div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              type="button"
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              onClick={() => setNotibtn((notibtn) => !notibtn)}
              onKeyDown={() => setNotibtn((notibtn) => !notibtn)}
              className={stylex(styles.hidder_box)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
const Settings_btn = ({ profbtn = false, setProfbtn = () => {} }) => {
  return (
    <>
      <AnimatePresence> 
        {profbtn && (
          <>
            <motion.div 
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            className={stylex(styles.prof_btn_box_container_1)}>
              <div className={stylex(styles.prof_btn_box_container_2)}>
                <div className={stylex(styles.prof_btn_box_container_3)} role="group" tabindex="0" >
                  <div className={stylex(styles.prof_btn_box_container_4)}>
                      <div className={stylex(styles.prof_btn_box_container_5)}>
                        <div className={stylex(styles.prof_btn_box_container_6)}>
                            <svg className={stylex(styles.prof_btn_box_container_7_svg)} viewBox="0 0 24 24" aria-hidden="true" >
                              <g>
                                  <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"></path>
                              </g>
                            </svg>
                            <div className={stylex(styles.prof_btn_box_container_8)}></div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              type="button"
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              onClick={() => setProfbtn((profbtn) => !profbtn)}
              onKeyDown={() => setProfbtn((profbtn) => !profbtn)}
              className={stylex(styles.hidder_box)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}


const styles = stylex.create({
  test: {
    width: '400px',
    height: '400px',
    backgroundColor: 'black',
    position: 'absolute',
  },
  default: {
    content: 'default',
  },
  post_btn_container_1: {
    width: '35px',
    height: '35px',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    userSelect: 'none',
    background: 'var(--gradient-1)',
    zIndex: '8888',
  },
  post_btn_container_shadow: {
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    userSelect: 'none',
    background: 'var(--gradient-1)',
    backgroundSize: '350% 350% !important',
    animation: 'gradient 10s ease infinite',
    filter: 'blur(4px) !important',
    position: 'absolute',
    marginTop: '5px',
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
    width: '25px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },


  hidder_box: {
    content: 'default',
    width: '1000% !important',
    height: '1000% !important',
    position: 'fixed !important',
    zIndex: '8888',
  },


  noti_btn_container_1: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'liner',
    userSelect: 'none',
    // zIndex: '8888',
    ":hover": {
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'liner',
      backgroundColor: 'rgba(0, 0, 1, 0.2)'
      // fill: ''
    },
  },
  noti_btn_container_2: {
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default'
  },

  noti_btn_container_3: {
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default'
  },

  noti_btn_container_4: {
    content: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  noti_btn_container_svg: {
    position: 'relative',
    maxWidth: '25px',
    maxHeight: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: '6px !important',
    // marginTop: '5px',
    userSelect: 'none',
    fill: 'var(--icon-1)',
    marginLeft: '1px !important',
  },

  noti_btn_box_container_1: {
    top: '70px',
    right: '55px',
    pointerEvents: 'auto',
    backfaceVisibility: 'hidden',
    position: 'fixed',
    content: 'default',
    zIndex: '9999',
  },
  noti_btn_box_container_2: {
    alignSelf: 'stretch',
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
  },
  noti_btn_box_container_3: {
    content: 'default',
  },
  noti_btn_box_container_4: {
    content: 'default',
  },
  noti_btn_box_container_5: {
    content: 'default',
  },
  noti_btn_box_container_6: {
    boxShadow: 'var(--shadow-1)',
    backgroundColor: 'var(--background)',
    borderRadius: 16,
    content: 'default',
  },
  noti_btn_box_container_7_svg: {
    right: 'calc(20px)',
    top: '-11px',
    filter: 'var(--shadow-2)',
    fontSize: '13px',
    color: 'var(--background)',
    width: '24px',
    position: 'absolute',
    userSelect: 'none',
    verticalAlign: 'text-top',
    maxWidth: '100%',
    height: '1.25em',
    fill: 'currentcolor',
    display: 'inline-block',
  },
  noti_btn_box_container_8: {
    maxWidth: '360px',
    minWidth: '260px',
    width: '300px',
    minHeight: '30px',
    maxHeight: '480px',
    overflow: 'auto',
    content: 'default',
  },





  // Profile box Style
  prof_btn_box_container_1: {
    top: '70px',
    // right: '5px',
    pointerEvents: 'auto',
    backfaceVisibility: 'hidden',
    position: 'fixed',
    content: 'default',
    zIndex: '9999',
  },
  prof_btn_box_container_2: {
    alignSelf: 'stretch',
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
  },
  prof_btn_box_container_3: {
    content: 'default',
  },
  prof_btn_box_container_4: {
    content: 'default',
  },
  prof_btn_box_container_5: {
    content: 'default',
  },
  prof_btn_box_container_6: {
    boxShadow: 'var(--shadow-1)',
    backgroundColor: 'var(--background)',
    borderRadius: 16,
    content: 'default',
  },
  prof_btn_box_container_7_svg: {
    right: 'calc(18px) ',
    top: '-11px',
    filter: 'var(--shadow-2)',
    fontSize: '13px',
    color: 'var(--background)',
    width: '24px',
    position: 'absolute',
    userSelect: 'none',
    verticalAlign: 'text-top',
    maxWidth: '100%',
    height: '1.25em',
    fill: 'currentcolor',
    display: 'inline-block',
  },
  prof_btn_box_container_8: {
    maxWidth: '360px',
    minWidth: '260px',
    width: '300px',
    minHeight: '30px',
    maxHeight: '480px',
    overflow: 'auto',
    content: 'default',
  },

});