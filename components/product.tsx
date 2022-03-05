//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
import { items } from './Pages/data';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PostItem, { PostModal } from '../pages/post/[postPage]';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const ListItem = ({ id, title, location, price, img}) => {
  return (
    <>
      <motion.li
        layoutId={`page${id}`}
        transition={{ type: "liner", bounce: 0, duration: 0.3 }}
        className={stylex(styles.listItem_container_2_li)}
        style={{ borderRadius: 16 }}
      >
        <Link 
          href={`/home?postPage=${id}`} 
          as={`/post/${id}`}
          scroll={false}
          >
          <motion.div className={stylex(styles.listItem_container_3_shadow)}>
            <div className={stylex(styles.listItem_container_4)}>
              <div>

              </div>
              <motion.div className={stylex(styles.listItem_container_5_group_1)}>
                <motion.img transition={{ type: "liner", bounce: 0, duration: 0.3 }} layoutId={`image-div-${id}`} className={stylex(styles.listItem_container_6_group_1_img)} src={img} alt="" />
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
                      <motion.span layoutId={`price-div-${id}`} className={stylex(styles.listItem_container_18_price_span)}>
                        {price}$
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.li>
    </>
  );
}


export default function Pruduct() {
  const [posts, setPosts] = useState([])
  const variants_nv = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const router = useRouter()
  const { asPath } = useRouter()
  const make = asPath == '/home'
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    if (make) {
      document.body.style.overflow = 'unset';
    }
  },[make])

  useEffect (
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  )
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
                {posts.map(post => (
                  <ListItem 
                    key={post.id}
                    id={post.id}
                    img = {post.data().image}
                    title={post.data().title}
                    location={post.data().location}
                    price={post.data().price}
                    />
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
    "@media (max-width: 850px)": {
      justifyContent: 'space-between',
    },
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
    transitionProperty: 'width, height, flex-basis',
    transitionDuration: '1s',
    transitionTimingFunction: 'liner',
    // marginRight: '20px',
    // background: 'var(--field-color)',
    "@media (max-width: 850px)": {
      maxWidth:'45%',
      flexBasis:'45%',
      transitionProperty: 'width, height, flex-basis',
      transitionDuration: '1s',
      transitionTimingFunction: 'liner',
    },
    "@media (max-width: 450px)": {
      maxWidth:'100%',
      flexBasis:'100%',
      height: '100%',
      transitionProperty: 'width, height, flex-basis',
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
    // background: 'var(--field-color)',
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
    // minHeight: '150px',
    height: '150px',
    maxHeight: '200px',
    objectFit:'cover',
    boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
  },
  listItem_container_7_group_2: {
    content: 'default',
    paddingTop: '10px',
    paddingBottom: '10px',
    // background: 'var(--field-color)',
    width: '100%',
    height: '100%',
    mozBoxAlign: 'center',
    alignItems: 'flex-start',
    userSelect: 'none',
    justifyContent: 'center',
  },
  listItem_container_8_group_2_title: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '17px',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
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
    paddingTop: '10px',
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
    "@media (max-width: 600px)": {
      fontSize: '12px',
    },
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
    fontSize: '15px',
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
    "@media (max-width: 600px)": {
      fontSize: '13px',
    },
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