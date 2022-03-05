//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
import { items } from './Pages/data';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PostItem, { PostModal } from '../pages/post/[postPage]';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';


export const ListItem = ({ id, title, location, price}) => {
  return (
    <>
      <motion.li
        // layoutId={`page${id}`}
        transition={{ type: "liner", bounce: 0, duration: 0.3 }}
        className={stylex(styles.listItem_container_2_li)}
        style={{ borderRadius: 16 }}
      >
        <div>
          <motion.div className={stylex(styles.listItem_container_3_shadow)}>
            <div className={stylex(styles.listItem_container_4)}>
              <motion.div
                // layoutId={`image${id}`}
                
                transition={{ type: "liner", bounce: 0, duration: 0.3 }}
                className={stylex(styles.listItem_container_5_group_1)}>
                <img className={stylex(styles.listItem_container_6_group_1_img)} src={`../images/${id}.jpg`} alt="" />
              </motion.div>
              <div className={stylex(styles.listItem_container_7_group_2)}>
                <div className={stylex(styles.listItem_container_8_group_2_title)}>
                  <span className={stylex(styles.listItem_container_9_group_2_title_span)}>
                    {title}
                  </span>
                </div>
                <div className={stylex(styles.listItem_container_10_group_2_group_flex)}>
                  <div className={stylex(styles.listItem_container_11_group_2_group)}>
                    <div className={stylex(styles.listItem_container_12_location_cont_1_title)}>
                      <span className={stylex(styles.listItem_container_13_location_cont_2_title_span)}>
                        {location}
                      </span>
                    </div>
                    <div className={stylex(styles.listItem_container_14_location_svg_cont)}>
                      <svg className={stylex(styles.listItem_container_15_location_svg)}  xmlns="http://www.w3.org/2000/svg"id="Layer_1" data-name="Layer 1" viewBox="0 0 30 30" ><path d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,6Zm8.66,3.157-.719-.239A8,8,0,0,0,12,0,7.993,7.993,0,0,0,4.086,9.092a5.045,5.045,0,0,0-2.548,1.3A4.946,4.946,0,0,0,0,14v4.075a5.013,5.013,0,0,0,3.6,4.8l2.87.9A4.981,4.981,0,0,0,7.959,24a5.076,5.076,0,0,0,1.355-.186l5.78-1.71a2.987,2.987,0,0,1,1.573,0l2.387.8A4,4,0,0,0,24,19.021V13.872A5.015,5.015,0,0,0,20.66,9.156ZM7.758,3.762a5.987,5.987,0,0,1,8.484,0,6.037,6.037,0,0,1,.011,8.5L12.7,15.717a.992.992,0,0,1-1.389,0L7.758,12.277A6.04,6.04,0,0,1,7.758,3.762ZM22,19.021a1.991,1.991,0,0,1-.764,1.572,1.969,1.969,0,0,1-1.626.395L17.265,20.2a5.023,5.023,0,0,0-2.717-.016L8.764,21.892a3,3,0,0,1-1.694-.029l-2.894-.9A3.013,3.013,0,0,1,2,18.075V14a2.964,2.964,0,0,1,.92-2.163,3.024,3.024,0,0,1,1.669-.806A8.021,8.021,0,0,0,6.354,13.7l3.567,3.453a2.983,2.983,0,0,0,4.174,0l3.563-3.463a7.962,7.962,0,0,0,1.813-2.821l.537.178A3.006,3.006,0,0,1,22,13.872Z"/></svg>
                    </div>
                  </div>
                  <div className={stylex(styles.listItem_container_16_group_2_group)}>
                    <div className={stylex(styles.listItem_container_17_price_div)}>
                      <span className={stylex(styles.span)}>
                        {price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.li>
    </>
  );
}


export default function RelatedPosts() {
  const divRref = useRef(null);
  const buttonHide = useRef(null);
  const [scrollProg, setScrollProg] = useState(0)
  const [hide, setHide] = useState(true)
  const [hide2, setHide2] = useState(true)

  useEffect(()=>{
    if (divRref.current.scrollLeft == 0) {
      setHide2(false)
    }
  },[]) 
  const scrollLeftFunc = () => {
    const max = divRref.current.scrollLeftMax
    divRref.current.scrollLeft += -200;
    if (divRref.current.scrollLeft == 0) {
      setHide2(false)
    }
    if (divRref.current.scrollLeft <= max) {
      setHide(true)
    }
  }
  
  const scrollRightFunc = () => {
    const max = divRref.current.scrollLeftMax - 200
    divRref.current.scrollLeft += 200
    if (divRref.current.scrollLeft >= max) {
      setHide(false)
    }
    if (divRref.current.scrollLeft >= 0) {
      setHide2(true)
    }
  }
  
  const variants_nv = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return (
    <>
      <div className={stylex(styles.cont_1)}>
        <div className={stylex(styles.cont_2)}>
          <div className={stylex(styles.cont_3)}>
            <div className={stylex(styles.title_cont_1)}>
              <div className={stylex(styles.title_cont_2)}>
                <span className={stylex(styles.span)}>Realeted Post</span>
              </div>
            </div>
            <div className={stylex(styles.cont_withbtns)}>
              {/* <button className={stylex(styles.btnslft)} style={{display: hide2 ? '' : 'none'}} onClick={() => scrollLeftFunc()}>scroll left</button> */}
              <motion.div 
                className={stylex(styles.btnslft_cont_1)} 
                onClick={() => scrollLeftFunc()} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.90 }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: hide2 ? 1 : 0, opacity: 1 }}
                exit={{ scale: hide2 ? 1 : 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
                type="button"
                >
                <div className={stylex(styles.btns_cont_2)}>
                  <svg className={stylex(styles.btns_svg2)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" ><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/></svg>
                </div>
              </motion.div>
              <motion.ul variants={variants_nv} ref={divRref} className={stylex(styles.cont_4_ul)} style={{scrollBehavior: 'smooth',}}>
                {items.map(card => (
                  <ListItem key={card.id} {...card} />
                ))}
              </motion.ul>
              <motion.div 
                className={stylex(styles.btnsrgt_cont_1)} 
                onClick={() => scrollRightFunc()} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.90 }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: hide ? 1 : 0, opacity: 1 }}
                exit={{ scale: hide ? 1 : 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
                type="button"
                >
                <div className={stylex(styles.btns_cont_2)}>
                  <svg className={stylex(styles.btns_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z"/></svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = stylex.create({
  cont_withbtns: {
    width: '100%',
    height: '100%',
    content: 'default',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'start',
    alignItems: 'center',
    MozBoxPack: 'start',
    justifyContent: 'flex-start',      
  },
  
  btnslft: {
    zIndex: '9999',
    position: 'absolute',
    left: '-2%',
  },
  btnslft_cont_1: {
    zIndex: '9999',
    position: 'absolute',
    left: '-3%',
    top: '35%',
    backgroundColor: 'var(--background)',
    borderRadius: '50%',
    border: 'none',
    boxShadow: 'var(--shadow-1)',
    display: 'flex',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',   
    width: '50px',
    height: '50px',
    cursor: 'pointer',
  },
  btnsrgt_cont_1: {
    zIndex: '9999',
    position: 'absolute',
    right: '-3%',
    top: '35%',
    backgroundColor: 'var(--background)',
    borderRadius: '50%',
    border: 'none',
    boxShadow: 'var(--shadow-1)',
    display: 'flex',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',   
    width: '50px',
    height: '50px',
    cursor: 'pointer',
  },
  btns_cont_2: {
    content: 'default'
  },
  btns_svg: {
    position: 'relative',
    maxWidth: '25px',
    maxHeight: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  btns_svg2: {
    position: 'relative',
    maxWidth: '25px',
    maxHeight: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
    marginLeft: '-5px',
    userSelect: 'none',
  },

  title_cont_1: {
    padding: 10,
    paddingLeft: '5px',
    paddingRight: '5px',
    content: 'default',
    width: '100%',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    MozBoxPack: 'center',
    justifyContent: 'center',
  },
  title_cont_2: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '25px',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
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
  cont_1: {
    content: 'default',
    background: 'var(--background)',
    zIndex: '1',
    width: '90vw',
    maxWidth: '1100px',
    minWidth: '0px',
    paddingTop: 10,
    paddingBottom: 10,
    display: 'block',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',

  },
  cont_2: {
    paddingLeft: '15px',
    paddingRight: '15px',
    content: 'default',
    width: '100%',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
  },
  cont_3: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    display: 'inline-block',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'flex-center',
  },
  cont_4_ul: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    MozBoxPack: 'start',
    justifyContent: 'flex-start',
    overflowX: 'scroll',
    overflow: '-moz-scrollbars-none',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    scrollSnapType: 'x  mandatory',
  },
  listItem_container_2_li: {
    width: '230px',
    height: '250px',
    content: 'default',
    mozBoxAlign: 'center',
    alignItems: 'center',
    userSelect: 'none',
    overflow: 'hidden',
    justifyContent: 'center',
    margin: '5px',
    marginBottom: '10px',
    // boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
    cursor: 'pointer', 
    transitionProperty: 'width, height',
    transitionDuration: '1s',
    transitionTimingFunction: 'liner',
    scrollSnapAlign: 'end',
    "@media (max-width: 600px)": {
      width: '150px',
      height: 'auto',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
    "@media (max-width: 400px)": {
      width: '130px',
      height: 'auto',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
  },
  listItem_container_3_shadow: {
    width: '100%',
    height: '100%',
    content: 'default',
    background: '#fff',
    // boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
    mozBoxAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5555,
  },
  listItem_container_4: {
    content: 'default',
    width: '100%',
    height: '100%',
  },
  listItem_container_5_group_1: {
    content: 'default',
    width: '100%',
    height: '170px',
    display: 'block',
    transitionProperty: 'width, height',
    transitionDuration: '1s',
    transitionTimingFunction: 'liner',
    "@media (max-width: 600px)": {
      width: '100%',
      height: '120px',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
    "@media (max-width: 400px)": {
      width: '100%',
      height: '100px',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
  },
  listItem_container_6_group_1_img: {
    width: '100%',
    height: '100%',
    boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
  },
  listItem_container_7_group_2: {
    content: 'default',
    padding: '10px',
  },
  listItem_container_8_group_2_title: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },
  listItem_container_9_group_2_title_span: {
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minWidth: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'wrap',
    content: 'default',
  },
  listItem_container_10_group_2_group_flex: {
    content: 'default',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    mozBoxAlign: 'center',
    alignItems: 'center',
  },
  listItem_container_11_group_2_group: {
    content: 'default',
    flexDirection: 'row',
    width: 'fit-content',
    justifyContent: 'space-between',
    mozBoxAlign: 'center',
    alignItems: 'center',
  },
  listItem_container_12_location_cont_1_title: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '13px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--icon-1)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },
  listItem_container_13_location_cont_2_title_span: {
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minWidth: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'wrap',
    content: 'default',
  },
  listItem_container_14_location_svg_cont: {
    content: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  listItem_container_15_location_svg: {
    position: 'relative',
    maxWidth: '15px',
    maxHeight: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '6px !important',
    fill: 'var(--icon-1)',
    marginTop: '5px',
    userSelect: 'none',
  },
  listItem_container_16_group_2_group: {
    content: 'default',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  listItem_container_17_price_div: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '14px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--color-text-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },
  listItem_container_18_price_span: {
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minWidth: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'wrap',
    content: 'default',
  },
})