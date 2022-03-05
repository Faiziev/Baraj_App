import Head from 'next/head';
import Link from 'next/link';
import stylex from "@ladifire-opensource/stylex";
import { motion } from "framer-motion";
import { items } from '../components/Pages/data';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PostModal } from '../components/ModalBox';
import Category from '../components/category.tsx';
import Popular from '../components/popular.tsx';
import FotterComp from '../components/footer.tsx';
import Product from '../components/product.tsx';

export const ListItem = ({ id, title, location, price}) => {
  // console.log(router.query.postPage)
  return (
    <>
      <motion.li
        layoutId={`page${id}`}
        transition={{ type: "liner", bounce: 0, duration: 0.3 }}
        className={stylex(styles.listItem_container_2_li)}
        style={{ borderRadius: 16 }}
      >
        <Link 
          href={`/Home?postPage=${id}`} 
          as={`/post/${id}`}
          scroll={false}
          >
          <motion.div className={stylex(styles.listItem_container_3_shadow)}>
            <div className={stylex(styles.listItem_container_4)}>
              <div>

              </div>
              <motion.div
                layoutId={`image-div-${id}`}
                transition={{ type: "liner", bounce: 0, duration: 0.3 }}
                className={stylex(styles.listItem_container_5_group_1)}>
                <motion.img  className={stylex(styles.listItem_container_6_group_1_img)} src={`../images/${id}.jpg`} alt="" />
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

export default function Home() {
  const router = useRouter()
  const { asPath } = useRouter()
  const make = asPath == '/home'
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    if (make) {
      document.body.style.overflow = 'unset';
    }
  },[make])
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      {!!router.query.postPage ? 
        <PostModal />
        :
        <></>
      }
      <>
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{marginTop: 50}}
          className={stylex(styles.container_1)} layoutId='main'  role='banner'>
            <div className={stylex(styles.container_2)}>
                <div className={stylex(styles.container_3)}>
                    <div className={stylex(styles.container_4)}>
                        <div className={stylex(styles.container_5)}>
                            <div className={stylex(styles.container_g_1)}>
                              <Category />
                            </div>
                            <div className={stylex(styles.container_g_3)}>
                              <ul className={stylex(styles.listItem_container_1_ul)}>
                                <Popular />
                              </ul>
                            </div>
                            <div className={stylex(styles.container_g_2)}>
                             <Product />
                            </div>
                            <div className={stylex(styles.container_g_2)}>
                              <FotterComp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
      </>
    </>
  )
}

const styles = stylex.create({
  title_cont_1: {
    paddingTop: 30,
    paddingBottom: 10,
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
    lineHeight: '30px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    textAlign: 'start',
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
  container_1: {
    MozBoxAlign: 'center',
    alignItems: 'center',
    content: 'default',
    overflowX: 'hidden',
    heigh: '100%',
  },
  container_2: {
    width: '98vw',
    heigh: '100%',
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    // background: '#ccc',
    content: 'default',
  },
  container_3: {
    backfaceVisibility: 'hidden',
    MozBoxAlign: 'center',
    alignItems: 'center',
    content: 'default',
    heigh: '100%',
  },
  container_4: {
    width: '100%',
    heigh: '100%',
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
  container_5: {
    maxWidth: '100%',
    width: '100%',
    heigh: '100%',
    display: 'flex',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'vertical',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px',
    background: 'var(--background)',
    zIndex: '1',
    content: 'default', 
  },
  container_g_1: {
    width: '93%',
    display: 'flex',
    heigh: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px',
    background: 'var(--background)',
    zIndex: '1',
    content: 'default',
  },
  container_g_2: {
    display: 'flex',
    heigh: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px',
    background: 'var(--background)',
    zIndex: '1',
    content: 'default',
  },
  container_g_3: {
    display: 'flex',
    heigh: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px',
    background: 'var(--background)',
    zIndex: '1',
    content: 'default',
  },
  listItem_container_1_ul: {
    content: 'default',
    flexWrap: 'wrap !important',
    alignContent: 'flexStart',
    width: '90vw',
    maxWidth: '1100px',
    height: '100%',
    mozBoxAlign: 'center',
    alignItems: 'center',
    userSelect: 'none',
    overflow: 'hidden',
    MozBoxFlex: '1',
    flexGrow: '1',
    MozBoxPack: 'justify',
    justifyContent: 'center',
    flexDirection: 'row',
    // transitionProperty: 'width',
    transitionDuration: '1s',
    transitionTimingFunction: 'liner',
    "@media (max-width: 600px)": {
      width: '100vw',
    }
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
    margin: '15px',
    boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
    cursor: 'pointer', 
    transitionProperty: 'width, height',
    transitionDuration: '1s',
    transitionTimingFunction: 'liner',
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
    boxShadow: 'var(--shadow-1)',
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
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center', 
    MozBoxPack: 'center',
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
    zIndex: '1',
    positon: 'relative',
    objectFit: 'cover',
    pointerEvents: 'none',
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
    content: 'default font',
    "@media (max-width: 600px)": {
      fontSize: '13px',
    },
  },
  listItem_container_9_group_2_title_span: {
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minWidth: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'wrap',
    content: 'default font',
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
});

