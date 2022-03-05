//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
// import { items } from './Pages/categor';
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PostItem, { PostModal } from '../pages/post/[postPage]';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';

const items = [
  {
    img: 'pop-1',
    title: 'Laptops',
  },
  {
    img: 'pop-2',
    title: 'Cars',
  },
  {
    img: 'pop-3',
    title: 'Phones',
  },
  {
    img: 'pop-4',
    title: 'Furnitures',
  },
]
export const PopularList = ({ id, img, title }) => {
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


export default function Popular() {
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
                <span className={stylex(styles.span)}>Popular Products</span>
              </div>
            </div>
            <div className={stylex(styles.cont_withbtns)}>
              <motion.ul variants={variants_nv} className={stylex(styles.cont_4_ul)} style={{scrollBehavior: 'smooth',}}>
                {items.map(card => (
                  <PopularList key={card.id} {...card} />
                ))}
              </motion.ul>
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

  title_cont_1: {
    paddingTop: 0,
    paddingBottom: 20,
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
    fontSize: '23px',
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
    flexWrap: 'wrap',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
    overflowX: 'hidden',
    overflow: '-moz-scrollbars-none',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    "@media (max-width: 450px)": {
      MozBoxPack: 'center',
      justifyContent: 'center',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
  },
  listItem_container_2_li: {
    width:'22.5%',
    maxWidth:'22.5%',
    flexBasis:'22.5%',
    height: '100%',
    maxHeight: '100%',
    display: 'block',
    content: 'default',
    mozBoxAlign: 'center',
    alignItems: 'center',
    userSelect: 'none',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: '5px',
    marginBottom: '10px',
    borderRadius: '16px',
    cursor: 'pointer', 
    transitionProperty: 'width, height',
    transitionDuration: '1s',
    transitionTimingFunction: 'liner',
    background: 'var(--field-color)',
    "@media (max-width: 800px)": {
      maxWidth:'45%',
      flexBasis:'45%',
      transitionProperty: 'width, height',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
    "@media (max-width: 450px)": {
      maxWidth:'100%',
      flexBasis:'100%',
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
    borderRadius: '16px',
    mozBoxAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5555,
    background: 'var(--field-color)',
  },
  listItem_container_4: {
    content: 'default',
    width: '100%',
    height: '100%',
  },
  listItem_container_5_group_1: {
    content: 'default',
    width: '100%',
    height: '100%',
    display: 'block',
    transitionProperty: 'width, height',
    transitionDuration: '1s',
    transitionTimingFunction: 'liner',
  },
  listItem_container_6_group_1_img: {
    width: '100%',
    height: '180px',
    maxHeight: '200px',
    boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
    objectFit: 'cover',
  },
  listItem_container_7_group_2: {
    content: 'default',
    padding: '10px',
    paddingTop: '0px',
    background: 'var(--field-color)',
    width: '100%',
    height: '100%',
    mozBoxAlign: 'center',
    alignItems: 'center',
    userSelect: 'none',
    justifyContent: 'center',
  },
  listItem_container_8_group_2_title: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '17px',
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
})