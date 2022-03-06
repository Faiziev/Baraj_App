//@ts-nocheck
import React, { useRef, useState } from 'react';
import stylex from "@ladifire-opensource/stylex";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion"
import { useSession } from "next-auth/react"
import { db, storage } from '../../firebase';
import { Input, Textarea, Button, Loading } from '@nextui-org/react';
import { addDoc, doc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

export const EmptyPage = ({page_title, apology, description}) => {
  const router = useRouter()
  const titleRef = useRef(null)
  const priceRef = useRef(null)
  const filePicker = useRef(null)
  const locationRef = useRef(null)
  const descriptionRef = useRef(null)
  
  const { asPath } = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    } 

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  } 

  const tagVariants = {
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1]
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };

  const { data: session } = useSession();
  console.log(session?.user.name)
  const upload = async () => {
    if(loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.name,
      title: titleRef.current.value,
      price: priceRef.current.value,
      location: locationRef.current.value,
      description: descriptionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    })
    
    console.log("New Doc added with ID", docRef.id);

    const imageRef = ref(storage, `posts/${docRef.id}/image`)

    await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
      const downloadUrl = await getDownloadURL(imageRef)

      await updateDoc(doc(db, 'posts', docRef.id), {
        image: downloadUrl,
      })
    })
    setLoading(false)
    setSelectedFile(null)
  }
  return (
    <>
    <AnimatePresence exitBeforeEnter initial={false}>
      <div className={stylex(styles.main_cont_1)}>
        <div className={stylex(styles.main_cont_2)}>
          <div className={stylex(styles.main_cont_3_bakc)} >
            <AnimatePresence>
              <motion.div
                variants={tagVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={router.asPath}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  type: 'tween',
                }}
                className={stylex(styles.main_cont_4)}>
                <div className={stylex(styles.state_cont_1)} aria-modal="true" aria-labelledby="modal-header" role="dialog" >
                  <div className={stylex(styles.state_cont_2)}>
                    <div className={stylex(styles.state_cont_3)}>
                      <div className={stylex(styles.state_cont_4)}>
                        <div className={stylex(styles.state_cont_5)}>
                          <div className={stylex(styles.state_cont_6)}>
                            <div className={stylex(styles.state_cont_7)}>
                              <div className={stylex(styles.state_cont_8)}>
                                <div className={stylex(styles.state_cont_9)}>
                                  <div className={stylex(styles.state_cont_10)}>
                                    <div className={stylex(styles.state_cont_11_svg_g)}>
                                      {/* <Link href={router.back()}> */}
                                        <motion.div 
                                          initial={{ 
                                            opacity: 0, 
                                            scale: 0 
                                          }}
                                          animate={{
                                            opacity: 1, 
                                            scale: 1
                                          }}
                                          exit={{
                                            opacity: 0, 
                                            scale: 0
                                          }}
                                          whileFocus={{
                                            transitionProperty: 'background-color, box-shadow',
                                            transitionDuration: '0.2s',
                                            transitionTimingFunction: 'liner',
                                            backgroundColor: 'var(--hover)'}} 
                                            className={stylex(styles.state_cont_12)} 
                                            aria-label="Close" 
                                            role="button" 
                                            tabindex="0"
                                            type='button'
                                            onClick={() => router.back()} 
                                            >
                                          <div className={stylex(styles.state_cont_13)} dir="auto" >
                                            <svg className={stylex(styles.state_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
                                            <span className={stylex(styles.span_1)}></span>
                                          </div>
                                        </motion.div>
                                      {/* </Link> */}
                                    </div>
                                    <div className={stylex(styles.state_cont_14)}>
                                      <div className={stylex(styles.state_cont_15)}>
                                        <h2 className={stylex(styles.state_h2)} dir="auto" aria-level="2" role="heading" id="modal-header">
                                          <span className={stylex(styles.span)}>
                                            {page_title}
                                          </span>
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <section className={stylex(styles.state_cont_section_1)} aria-labelledby="accessible-list-4" role="region" >
                          <h1 className={stylex(styles.state_cont_section_2)} dir="auto" aria-level="1" role="heading" >{page_title}</h1>
                          <div className={stylex(styles.state_cont_section_3)} aria-label="Timeline: Follower requests" >
                            <div className={stylex(styles.state_cont_section_4)} data-testid="emptyState">
                              <div className={stylex(styles.state_cont_section_5)}>
                                <div className={stylex(styles.upload_goup)}>
                                  <div className={stylex(styles.img_area)}>
                                    <div className={stylex(styles.img_title)}>
                                      <span className={stylex(styles.span)}>  
                                      Upload Image
                                      </span>
                                    </div>
                                    {selectedFile ? (
                                      <>
                                        <div className={stylex(styles.img_area_cont)}>
                                          <img className={stylex(styles.img_prew)} src={selectedFile} onClick={() => filePicker.current.click()} alt="" />
                                        </div>
                                      </>
                                      )
                                      : (
                                        <>
                                          <div className={stylex(styles.empty_area)} type='button' onClick={() => filePicker.current.click()}>
                                            <svg className={stylex(styles.img_icon)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" ><path d="M18,19a1,1,0,0,0,.707-1.707l-6.172-6.171a5,5,0,0,0-7.07,0L3.293,13.293a1,1,0,0,0,1.414,1.414l2.172-2.171a3.07,3.07,0,0,1,4.242,0l6.172,6.171A1,1,0,0,0,18,19Z"/><path d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"/><path d="M23,16a1,1,0,0,0-1,1v2a3,3,0,0,1-3,3H17a1,1,0,0,0,0,2h2a5.006,5.006,0,0,0,5-5V17A1,1,0,0,0,23,16Z"/><path d="M1,8A1,1,0,0,0,2,7V5A3,3,0,0,1,5,2H7A1,1,0,0,0,7,0H5A5.006,5.006,0,0,0,0,5V7A1,1,0,0,0,1,8Z"/><path d="M7,22H5a3,3,0,0,1-3-3V17a1,1,0,0,0-2,0v2a5.006,5.006,0,0,0,5,5H7a1,1,0,0,0,0-2Z"/><path d="M19,0H17a1,1,0,0,0,0,2h2a3,3,0,0,1,3,3V7a1,1,0,0,0,2,0V5A5.006,5.006,0,0,0,19,0Z"/></svg>
                                          </div>
                                        </>
                                      )
                                    }
                                    <input type="file" hidden ref={filePicker} onChange={addImageToPost}/>
                                  </div>
                                  <div className={stylex(styles.inputs_cont)}>
                                    <div className={stylex(styles.input)}>
                                      <Input ref={titleRef} width="380px" bordered labelPlaceholder="Title" color="default" clearable initialValue="Test"/>
                                    </div>
                                    <div className={stylex(styles.input)}>
                                      <Textarea ref={descriptionRef} width="380px" bordered labelPlaceholder="Description" color="default" initialValue="Testing The Website"/>
                                    </div>
                                    <div className={stylex(styles.input)}>
                                      <Input ref={locationRef} width="160px" type="search" bordered labelPlaceholder="Location" color="default" initialValue="Moscow"/>
                                      <Input ref={priceRef} width="160px" type="number" bordered labelPlaceholder="Price" color="default" initialValue="50"/>
                                    </div>
                                  </div>
                                  <div className={stylex(styles.sell_button)}>
                                    <Button onClick={upload} width="100px" shadow color="warning" disabled={!selectedFile}>
                                      {loading ? 
                                        <Loading type="points" color="white" size="sm" />
                                        :
                                        <div className={stylex(styles.sell)}>
                                        Sell
                                        </div>
                                      }
                                    <div className={stylex(styles.sell)}></div>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              onClick={() => router.back()}
              className={stylex(styles.closer)}
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
    </>
  );
}



const styles = stylex.create({

  upload_goup: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default'
  },
  img_area: {
    width: '100%',
    height: '100%',
  },
  img_title: {
    fontWeight: '500',
    fontSize: '15px',
    whiteSpace: 'wrap',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'flex-start',
    MozBoxFlex: '1',
    flexGrow: '1',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    textAlign: 'start',
    marginBottom: '5px',
  },
  img_area_cont: {
    width: '100%',
    height: '180px',
    maxWidth: '380px',
    borderRadius: 16,
    cursor: 'pointer',
    background: 'var(--field-color)',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default'
  },
  img_prew: {
    maxWidth: '380px',
    height: '100%',
    borderRadius: 16,
    width: 'full',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  empty_area: {
    width: '380px',
    height: '180px',
    borderRadius: 16,
    cursor: 'pointer',
    background: 'var(--field-color)',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default'
  },
  img_icon: {
    width: 60,
    height: 60,
    color: 'var(--color-text-3)',
    userSelect: 'none',
    verticalAlign: 'text-bottom',
    position: 'relative',
    minWidth: '100%',
    fill: 'currentcolor',
    display: 'inline-block',
  },
  inputs_cont: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default'
  },
  input: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    content: 'default',
    flexDirection: 'row',
    marginTop: '30px',
  },
  sell_button: {
    margin: '40px'
  },
  sell: {
    fontWeight: '500',
    fontSize: '15px',
    whiteSpace: 'wrap',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'flex-start',
    MozBoxFlex: '1',
    flexGrow: '1',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    textAlign: 'start',
    marginBottom: '5px',
  },














  closer: {
    content: 'default',
    width: '100vw',
    height: '98vh',
    position: 'fixed',
    zIndex: '5',
    overflow: 'hidden !important',
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
  main_cont_1: {
    maxWidth: '100%',
    width: '100vw',
    height: '100vh',
    MozBoxAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
    margin: '0px',
    backgroundColor: 'var(--background-lover-op)',
    backfaceVisibility: 'hidden',
    zIndex: '999 !important',
    content: 'default',
    position: 'fixed',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
  },
  main_cont_2: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
    content: 'default',
    display: 'flex',
  },
  main_cont_3_bakc: {
    width: '100%',
    height: '100%',
    zIndex: '8888 !important',
    content: 'default',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
    display: 'flex',
  },
  main_cont_4: {
    content: 'default',
    zIndex: '9999 !important',
  },
  state_cont_1: {
    height: '650px',
    minHeight: '400px',
    maxHeight: '90vh',
    maxWidth: '80vw',
    zIndex: '9999 !important',
    minWidth: 600,

    flexShrink: '1',
    borderRadius: '16px',
    overflow: 'hidden',
    content: 'default',
    // @ts-ignore
    "@media (max-width: 850px)": {
      height: '100vh',
      minHeight: '0px',
      maxHeight: '100%',
      maxWidth: '100%',
      borderRadius: '0px',
      minWidth: '0px',
      background: '#ccc',
    },
  },
  state_cont_2: {
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    backgroundColor: 'var(--background)',
    borderRadius: '16px',
    content: 'default',
    // @ts-ignore
    "@media (max-width: 850px)": {
      borderRadius: '0px',
    },
  },
  state_cont_3: {
    minWidth: '600px',
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    content: 'default',
  },
  state_cont_4: {
    borderBottomRightRadius: '16px',
    borderBottomLeftRadius: '16px',
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    overflow: 'hidden',
    content: 'default',
    // @ts-ignore
    "@media (max-width: 850px)": {
      width: '100vw',
    },
  },
  state_cont_5: {
    zIndex: '2',
    position: 'sticky',
    top: '0px',
    content: 'default',
  },
  state_cont_6: {
    content: 'default',
  },
  state_cont_7: {
    height: '50px',
    zIndex: '2',
    content: 'default',
  },
  state_cont_8: {
    content: 'default',
  },
  state_cont_9: {
    borderTopRightRadius: '4',
    borderTopLeftRadius: '4px',
    backGroundColor: 'var(--background)',
    height: '50px',
    content: 'default',
  },
  state_cont_10: {
    height: '50px',
    width: '100vw',
    minWidth: '600px',
    maxWidth: '600px',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    content: 'default',
    // @ts-ignore
    "@media (max-width: 850px)": {
      width: '100vw',
      maxWidth: '100%',
    },
  },
  state_cont_11_svg_g: {
    minWidth: '56px',
    minHeight: '32px',
    alignSelf: 'stretch',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    MozBoxPack: 'center',
    justifyContent: 'center',
    content: 'default'
  },
  state_cont_12: {
    marginLeft: 'calc(-8px)',
    marginTop: 'calc(5px)',
    minWidth: 36,
    minHeight: 36,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    outlineStyle: 'none',
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
    userSelect: 'none',
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '9999px',
    content: 'default',
    cursor: 'pointer',
    ":hover": {
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'liner',
      backgroundColor: 'var(--hover)',
      cursor: 'pointer',
    },
  },
  state_cont_13: {
    fontWeight: '800',
    fontSize: '15px',
    whiteSpace: 'wrap',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    MozBoxFlex: '1',
    flexGrow: '1',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    textAlign: 'center',
  },
  state_svg: {
    width: '13px',
    height: 13,
    color: 'var(--title)',
    userSelect: 'none',
    verticalAlign: 'text-bottom',
    position: 'relative',
    minWidth: '100%',
    fill: 'currentcolor',
    display: 'inline-block',
  },
  span_1: {
    boorderBottom: '2px solid var(--title)',
    fontfamily: 'inherit',
    fontSize: '15px',
    lineheight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: 'inherit',
    font: 'inherit',
    content: 'default',
  },
  state_cont_14: {
    MozBoxPack: 'center',
    justifyContent: 'center',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    flexShrink: '1',
    height: '100%',
    MozBoxFlex: '1',
    // flexGrow: '1',
    width: 'calc(100vw - 90px)',
    content: 'default',
  },
  state_cont_15: {
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    content: 'default',
  },
  state_h2: {
    lineHeight: '24px',
    fontSize: '20px',
    color: 'var(--title)',
    fontWeight: '600',
    fontFamily: 'var(--font-1)',
    overflowWrap: 'break-word',
    minWidth: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    content: 'default font',
  },
  state_cont_section_1: {
    content: 'default',
  },
  state_cont_section_2: {
    whiteSpace: '1px',
    clip: 'rect(1px, 1px, 1px, 1px)',
    height: '1px',
    position: 'absolute',
    padding: '0px',
    borderWidth: '0px',
    overflow: 'hidden',
    content: 'default font',
  },
  state_cont_section_3: {
    content: 'default',
  },
  state_cont_section_4: {
    maxWidth: 'calc(400px)',
    alignSelf: 'center',
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 32,
    marginTop: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    content: 'default',
  },
  state_cont_section_5: {
    content: 'default',
  },
  state_cont_section_title_1: {
    whiteSpace: 'wrap',
    marginBottom: '10px',
    fontWeight: '800',
    fontSize: '31px',
    fontFamily: 'var(--font-1)',
    lineHeight: '40px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    color: 'var(--color-text-2)',
    content: 'default font',
    textAlign: 'left ',
  },
  state_cont_section_title_2: {
    whiteSpace: 'wrap',
    marginBottom: '28px',
    fontWeight: '400',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    color: 'var(--color-text-3)',
    content: 'default font',
    textAlign: 'left ',
  },
})