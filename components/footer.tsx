//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
import { items } from './Pages/data';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PostItem, { PostModal } from '../pages/post/[postPage]';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';



const itemIds = [0, 1, 2, 3, 4];


const navigation_titles = [
  'Place an Post',
  'Posts',
  'The shops',
  'The shops',
  'Help',
  'security',
  'Advertising',
  'About company',
  'Career',
];

export const ListItem = ({ i }) => {
  return (
    <>
      <motion.li
        transition={{ type: "liner", bounce: 0, duration: 0.3 }}
        className={stylex(styles.listItem_container_1_li)}
        style={{ borderRadius: 16 }}
      >
        <div className={stylex(styles.listItem_title_cont_1)}>
          <div className={stylex(styles.listItem_title_cont_2)}>
            <span className={stylex(styles.span)}>
              {navigation_titles[i]}
            </span>
          </div>
        </div>
      </motion.li>
    </>
  );
}

export default function FotterComp() {
  // console.log(styles)
  return (
    <>
      <div className={stylex(styles.cont_1)}>
        <div className={stylex(styles.cont_2)}>
          <div className={stylex(styles.cont_3)}>
            <ul className={stylex(styles.cont_4_ul)}>
              {itemIds.map(i => (
                <ListItem i={i} key={i} />
              ))}
            </ul>
            <div className={stylex(styles.cont_5)}>
              <div className={stylex(styles.cont_6)}>
                <span className={stylex(styles.span)}>
                  Baraj is an ad site. © LLC Baraj Terms of Use. User Data Policy. By paying for services on Baraj, you accept the offer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = stylex.create({
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
    // @ts-ignore
    "@media (max-width: 860px)": {
      width: '100vw',
      maxWidth: '100%',
      paddingBottom: '50px',
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
    "@media (max-width: 860px)": {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  cont_3: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'verticall',
    flexDirection: 'column',
  },
  cont_4_ul: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'space-between',
    overflowX: 'hidden',
    borderBottom: '1px solid var(--color-border-1)',
    flexWrap: 'wrap',
  },
  listItem_container_1_li: {
    content: 'default',
    // width: '100%',
    // maxWidth: '100%',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'flex-start',
    overflowX: 'hidden',
    padding: 10,
  },
  listItem_title_cont_1: {

  },
  listItem_title_cont_2: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '13px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--color-text-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    textAlign: 'center',
  },
  cont_5: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    overflowX: 'hidden',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  cont_6: {
    textAlign: 'center',
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '13px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--color-text-3)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
  },
})