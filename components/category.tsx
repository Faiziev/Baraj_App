//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
import { items } from './Pages/categor';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PostItem, { PostModal } from '../pages/post/[postPage]';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';


export const CategoryList = ({ id, img, title }) => {
  return (
    <>
      <motion.li
        layoutId={`${id}`}
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
                <img className={stylex(styles.listItem_container_6_group_1_img)} src={`../images/${img}.jpg`} alt="" />
              </motion.div>
              <div className={stylex(styles.listItem_container_7_group_2)}>
                <div className={stylex(styles.listItem_container_8_group_2_title)}>
                  <span className={stylex(styles.listItem_container_9_group_2_title_span)}>
                    {title}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.li>
    </>
  );
}


export default function Category() {
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
            <div className={stylex(styles.cont_withbtns)}>
              {/* <button className={stylex(styles.btnslft)} style={{display: hide2 ? '' : 'none'}} onClick={() => scrollLeftFunc()}>scroll left</button> */}
              <motion.div 
                className={stylex(styles.btnslft_cont_1)} 
                onClick={() => scrollLeftFunc()} 
                whileHover={{ scale: hide2 ? 1.1 : 0}}
                whileTap={{ scale: hide2 ? 0.90 : 0 }}
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
                  <CategoryList key={card.id} {...card} />
                ))}
              </motion.ul>
              <motion.div 
                className={stylex(styles.btnsrgt_cont_1)} 
                onClick={() => scrollRightFunc()} 
                whileHover={{ scale: hide ? 1.1 : 0 }}
                whileTap={{ scale: hide ? 0.90 : 0 }}
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
    "@media (max-width: 600px)": {
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
      display: 'none',
    },
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
    "@media (max-width: 600px)": {
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
      display: 'none',
    },
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
    maxWidth: '1050px',
    minWidth: '0px',
    paddingTop: 10,
    paddingBottom: 10,
    display: 'block',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    "@media (max-width: 600px)": {
      width: '100vw',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
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
    "@media (max-width: 600px)": {
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
      scrollSnapType: 'none',
    },
  },
  listItem_container_2_li: {
    width: 'fit-content',
    height: '100%',
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
      width: 'fit-content',
      height: '100%',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
    "@media (max-width: 400px)": {
      width: 'fit-content',
      height: '100%',
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
      height: '130px',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
    "@media (max-width: 400px)": {
      width: '100%',
      // height: '150px',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
  },
  listItem_container_6_group_1_img: {
    width: '120px',
    height: '100%',
    boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
    objectFit: 'cover',
    "@media (max-width: 600px)": {
      width: '100px',
      height: '100%',
    }
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