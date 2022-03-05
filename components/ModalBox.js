import stylex from "@ladifire-opensource/stylex";
import { items } from "./Pages/data";
import { LoremIpsum, name, surname, username } from "react-lorem-ipsum";
import { useMotionValue, motion, useElementScroll, useTransform } from "framer-motion";
import { Link } from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import moment from "moment";
import dynamic from 'next/dynamic'
import RelatedPosts from "./realetedPost.tsx";
import FotterComp from "./footer.tsx";
import { collection, onSnapshot, query, orderBy, getDocs, where, doc, get } from "firebase/firestore";
import { Avatar } from '@nextui-org/react';
import { db } from "../firebase";
import { useSession } from "next-auth/react";



// export async function ({ query }) {
  
//   const PostPage = query.postPage
//   onSnapshot(doc(db, "posts", PostPage), (doc) => {
//     // console.log("Current data: ", doc.data());
//     // setPosts(doc.data());
//     post.push({ ...doc.data() })
//     // titles = doc.data().title
//   });
//   let post = [' ']
//   return {
//     props: {
//       postID: PostPage,
//     },
//   }
// }
export const PostModal = ({}) => {
  const router = useRouter()
  const { asPath } = useRouter()
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const { data: session } = useSession();
  
  const postID = asPath.split("post/").pop()

  useEffect(() => onSnapshot(query(doc(db, 'posts', postID)),(doc) => setPosts(doc.data())),[])
  useEffect(() => onSnapshot(query(collection(db, 'posts', postID, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs)), [db])
  // @ts-ignore
  const sendComment = async (e) => {
    e.preventDefault();
    try{
      const commentToSend = comment
      setComment('')
      
      await addDoc(collection(db, 'posts', postID, 'comments'), {
        comment: commentToSend,
        username: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
        timestamp: serverTimestamp()
      })  
    } catch({message}){
      console.log(message);
    }
  }
  
  const [posts, setPosts] = useState([])
  const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
  const scrolledHeight = useTransform(scrollYProgress, [0, 0.2], ['93vh', '100vh']);
  const scrolledWidth = useTransform(scrollYProgress, [0, 0.2], ['87vw', '100vw']);
  const scrolledBorder = useTransform(scrollYProgress, [0, 0.2], ['16px', '0px']);
  const scrolledWidth2 = useTransform(scrollYProgress, [0, 0.2], ['90vw', '100vw']);
  
  const postPage = asPath.charAt(asPath.length - 1);
  
  
  const data = items.find( ({ id }) => id === `${postPage}` );
  const date = moment(new Date(+(new Date()) - Math.floor(Math.random()*100))).format('MM/DD/YYYY');
  const itemIds = [0, 1, 2];

  const btns = [
    <svg className={stylex(styles.modal_content_groups_1_btns_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>,
    <svg className={stylex(styles.modal_content_groups_1_btns_svg)} id="Layer_1"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m20 4h-5a4 4 0 0 0 -4-4h-7a4 4 0 0 0 -4 4v19a1 1 0 0 0 2 0v-10h8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-5a4 4 0 0 0 -4-4zm-18 7v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2zm20 2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2-2v-.142a4 4 0 0 0 3-3.858v-3h5a2 2 0 0 1 2 2z"/></svg>,
    <div className={stylex(styles.modal_content_groups_1_btns_name)}><span className={stylex(styles.span)}>chat</span></div>,
  ];
  
  const ContentBtns = ({ i }) => {
    return (
      <motion.li
      className={stylex(styles.modal_content_groups_1_group_1_g_2_li)}>
        <div className={stylex(styles.modal_content_groups_1_btns_cont_1)}>
          <div className={stylex(styles.modal_content_groups_1_btns_cont_2)}>
            <div className={stylex(styles.modal_content_groups_1_btns_cont_3)}>
              {btns[i]}
            </div>
          </div>
        </div>
      </motion.li>
    );
  };
  const Comments = ({ comments_prop }) => {
    return (
      <motion.li className={stylex(styles.modal_groups_g_2_comments_li)}>
        <div className={stylex(styles.modal_groups_g_2_comments_cont_1)}>
          <div className={stylex(styles.modal_groups_g_2_comments_cont_2)}>
            <div className={stylex(styles.modal_groups_g_2_comments_g_1)}>
              <div className={stylex(styles.modal_groups_g_2_comments_avatar_cont)}>
                <Avatar src={comments_prop.data().userImage} css={{ size: "$16" }}/>
              </div>
            </div>
            <div className={stylex(styles.modal_groups_g_2_comments_g_2_header)}>
              <div className={stylex(styles.modal_groups_g_2_comments_g_2_header_gropup_1)}>
                <div className={stylex(styles.modal_groups_g_2_comments_header)}>
                  <div className={stylex(styles.modal_groups_g_2_comments_header_name)}>
                    <span className={stylex(styles.span)}>
                      <span className={stylex(styles.span)}>
                      {comments_prop.data().username}
                      </span>
                    </span>
                  </div>
                  <div className={stylex(styles.modal_groups_g_2_comments_header_username)}>
                    <span className={stylex(styles.span)}>
                      <span className={stylex(styles.span)}>
                        {comments_prop.data().email}
                      </span>
                    </span>
                  </div>
                </div>
                <div className={stylex(styles.modal_groups_g_2_comments_header_btn_cont_1)}>
                  <div className={stylex(styles.modal_groups_g_2_comments_header_btn_cont_2)}>
                    <svg className={stylex(styles.modal_groups_g_2_comments_header_btn_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="2" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="22" cy="12" r="2"/></svg>
                  </div>
                </div>
              </div>
              <div className={stylex(styles.modal_groups_g_2_comments_g_3)}>{/* for description */}
                <div className={stylex(styles.modal_groups_g_2_comments_comment)}>
                  <div className={stylex(styles.modal_content_description)}>
                    <span className={stylex(styles.span)}>
                      {comments_prop.data().comment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.li>
    );
  };


  const input = [-200, 0, 200];
  const output = [0, 1, 0];


  function navigate() {
    router.push({ pathname: '/home' }, { scroll: false });
  }



  const id = asPath.split("post/").pop()
  // console.log(id)
  
  // const [posts, setPosts] = useState([])
  // useEffect (
  //   () =>
  //     onSnapshot(
  //       query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  //       (snapshot) => {
  //         setPosts(snapshot.docs);
  //       }
  //     ),
  //   [db]
  // )
  return (
    <>
      <div className={stylex(styles.modal_container_box_1)} style={{pointerEvents: 'auto' }}>
        <motion.li 
          layoutId={`page${id}`}
          className={stylex(styles.modal_container_box_2)} 
          transition={{ type: "liner", bounce: 0, duration: 0.5 }}
          style={{height: scrolledHeight, width: scrolledWidth, borderRadius: scrolledBorder, }}
          >
            <div ref={ref} className={stylex(styles.modal_container_box_3)} >
              <motion.div
                className={stylex(styles.modal_container_box_4)}>
                <div
                  style={{width: scrolledWidth2, pointerEvents: 'auto',}} 
                  className={stylex(styles.modal_groups_1)}>
                  <div 
                    className={stylex(styles.modal_img_cont_1)}  >
                    <div className={stylex(styles.modal_img_cont_2)} >
                      <motion.div className={stylex(styles.modal_img_cont_3)} >
                        <motion.img  layoutId={`image-div-${id}`} className={stylex(styles.modal_img)} src={posts.image} alt="" style={{ pointerEvents: 'none' }} transition={{ type: "liner", bounce: 0, duration: 0.5 }}  />
                      </motion.div>
                    </div>  
                  </div>
                </div>
                <div className={stylex(styles.modal_groups_2)}>
                  <div className={stylex(styles.modal_content_cont_1)}>
                    <div className={stylex(styles.modal_content_cont_2)}>
                      <div className={stylex(styles.modal_content_groups_1)}>
                        <div className={stylex(styles.modal_content_groups_1_group_1)}>{/* for price, like/flag/chat btns */}
                          <div layoutId={`price-div-${id}`} className={stylex(styles.modal_content_groups_1_group_1_g_1)}>
                              <motion.div className={stylex(styles.modal_content_groups_1_group_1_g_1_price)}>
                                <motion.span layoutId={`price-div-${id}`} className={stylex(styles.span)}>{/* price */}
                                  {posts.price}$
                                </motion.span>
                              </motion.div>
                          </div>
                          <div className={stylex(styles.modal_content_groups_1_group_1_g_2)}>{/* btns */}
                            <ul className={stylex(styles.modal_content_groups_1_group_1_g_2_ul)}>
                              {itemIds.map(i => (
                                <ContentBtns i={i} key={i} />
                              ))}
                            </ul>
                          </div>
                        </div>
                        <motion.div
                          layout
                          animate={{ opacity: 1 }}
                          transition={{
                            opacity: { ease: "linear" },
                            layout: { duration: 0.3 }
                          }}
                          className={stylex(styles.modal_content_groups_1_group_2)}>{/* for title  */}
                          <div className={stylex(styles.modal_content_groups_1_group_2_title)}>
                            <span className={stylex(styles.span)}>
                              {posts.title}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                      <div className={stylex(styles.modal_content_groups_2)}>
                        <div className={stylex(styles.modal_content_groups_2_g_1)}>{/* for description */}
                          <div className={stylex(styles.modal_content_groups_2_g_1_cont_1)}>
                            <div className={stylex(styles.modal_content_description)}>
                              <span className={stylex(styles.span)}>
                                {posts.description}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={stylex(styles.modal_content_groups_2_g_2)}>{/* for another informations */}
                          <div className={stylex(styles.modal_content_groups_2_g_2_g_1)}>
                            <div className={stylex(styles.modal_content_groups_2_g_2_date)}>{/* for date */}
                              <span className={stylex(styles.span)}>
                                {date}
                              </span>
                            </div>
                            <div className={stylex(styles.modal_content_groups_2_g_2_location)}>{/* for location */}
                              <span className={stylex(styles.span)}>
                                {posts.location}
                              </span>
                            </div>
                            <div className={stylex(styles.modal_content_groups_2_g_2_pfcard_cont_1)}>{/* user profile card */}
                              <div className={stylex(styles.modal_content_groups_2_g_2_pfcard_cont_2)}>
                                <div className={stylex(styles.modal_content_pf_g_1)}>
                                  <div className={stylex(styles.modal_content_pf_name)}>
                                    <span className={stylex(styles.span)}>
                                      {posts.username}
                                    </span>
                                  </div>
                                  <div className={stylex(styles.modal_content_pf_username)}>
                                    <span className={stylex(styles.span)}>
                                      {posts.email}
                                    </span>
                                  </div>
                                </div>
                                <div className={stylex(styles.modal_content_pf_g_2)}>{/* users avatar */}
                                  <div className={stylex(styles.modal_content_pf_avatar)}>
                                    <Avatar src={posts.profileImg} css={{ size: "$20" }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={stylex(styles.modal_groups_3)}>
                  <div className={stylex(styles.modal_groups_3_g_1)}>{/* for input bar */}
                    <div className={stylex(styles.modal_groups_input_cont_1)}>
                      <div className={stylex(styles.modal_groups_input_cont_2)}>
                        <div className={stylex(styles.modal_groups_input_cont_3)}>
                          <div className={stylex(styles.modal_groups_input_cont_4)}>
                            <div className={stylex(styles.modal_groups_input_cont_5_groups)}>
                              <div className={stylex(styles.modal_groups_input_pfimg_cont_1)}>
                                <div className={stylex(styles.modal_groups_input_pfimg_cont_2)}>
                                  <Avatar src={posts.profileImg} css={{ size: "$17" }} />
                                </div>
                              </div>
                              <div className={stylex(styles.modal_groups_input_groups_2)}>
                                <div className={stylex(styles.modal_groups_input_input_1)}>
                                  <div className={stylex(styles.modal_groups_input_input_2)}>
                                    <div className={stylex(styles.modal_groups_input_input_3)}>
                                      <div className={stylex(styles.modal_groups_input_input_4)}>
                                        <div className={stylex(styles.modal_groups_input_input_5)}>
                                          <div className={stylex(styles.searchbox_container_2)}>
                                              <div className={stylex(styles.searchbox_container_3)}>
                                                <div className={stylex(styles.searchbox_container_4)}>
                                                    <form className={stylex(styles.searchbox_container_5_form)} action="#" aria-label="Search" role="search" >
                                                      <div className={stylex(styles.searchbox_container_6)}>
                                                        <div className={stylex(styles.searchbox_container_7)}>
                                                          <div className={stylex(styles.searchbox_container_8)}>
                                                            <label className={stylex(styles.searchbox_container_9_label)} >
                                                              <div className={stylex(styles.searchbox_container_11)}>
                                                                <div className={stylex(styles.searchbox_container_12)} dir="auto" >
                                                                  <input 
                                                                    className={stylex(styles.searchbox_container_input)}
                                                                    aria-activedescendant="typeaheadFocus-0.6344908941926162" 
                                                                    aria-autocomplete="list" 
                                                                    aria-label="Search query" 
                                                                    aria-owns="typeaheadDropdown-1" 
                                                                    autoCapitalize="sentences" 
                                                                    autoComplete="off" 
                                                                    autoCorrect="off" 
                                                                    placeholder="Search" 
                                                                    role="combobox" 
                                                                    spellCheck="false" 
                                                                    enterKeyHint="search" 
                                                                    type="text" 
                                                                    dir="auto"
                                                                    value={comment}
                                                                    onChange={(e) => setComment(e.target.value)}
                                                                    />
                                                                </div>
                                                              </div>
                                                            </label>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </form>
                                                </div>
                                              </div>
                                          </div>
                                          <div className={stylex(styles.modal_groups_input_btn_1)} aria-disabled="true" role="button" type='submit' disabled={!comment.trim()} onClick={sendComment} >
                                            <div className={stylex(styles.modal_groups_input_btn_2)} dir="auto" >
                                              <span className={stylex(styles.span)}>
                                                <span className={stylex(styles.span)}>Reply</span>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className={stylex(styles.modal_groups_3_g_2)}> {/* for comments */}
                      <div className={stylex(styles.modal_groups_g_2_cont)}>
                        <motion.ul
                          className={stylex(styles.modal_groups_g_2_comments_ul)}>
                          {comments.map(comment => (
                            <Comments key={comment.id} comments_prop={comment} />
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                </div>
                <div className={stylex(styles.modal_groups_4)}> 
                  <RelatedPosts />
                </div>
                <div className={stylex(styles.modal_groups_5)}>
                  <FotterComp />
                </div>
              </motion.div>
            </div>
        </motion.li>
        <motion.div
            initial={{ 
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 5 }}
            onClick={() => router.push(
              {
                pathname: '/home',
              },
              undefined,
              { scroll: false, shallow: true }
            )}
            className={stylex(styles.closer)}
        />
      </div>
    </>
  )
}

const styles = stylex.create({
  closer: {
    width: '200vw',
    height: '200vw',
    zIndex: '1',
  },
  margin: {
    content: 'default',
    height: '200px',
    width: '100%',
    position: 'relative',
  },

  modal_container_box_1: {
    maxWidth: '100%',
    width: '100vw',
    height: '100%',
    MozBoxAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
    margin: '0px',
    background: 'rgba(var(--field-color), 1)',
    backfaceVisibility: 'hidden',
    // opacity: '0.1',
    zIndex: '99999 !important',
    content: 'default',
    position: 'fixed',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
  },
  modal_container_box_2: {
    boxShadow: 'var(--shadow-1)', 
    position: 'absolute',
    zIndex: '3',
    backgroundColor: 'var(--background)',
    backfaceVisibility: 'hidden',
    display: 'flex',
    MozBoxAlign: 'center',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  modal_container_box_3: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    content: 'default',
    display: 'flex',
    flexDirection: 'column',
    MozBoxAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    MozBoxPack: 'start',
    boxSizing: 'border-box',
  },
  modal_container_box_4: {
    width: '100%',
    // height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    content: 'default',
    display: 'flex',
    flexDirection: 'column',
    MozBoxAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  modal_groups_1: {
    contet: 'default',
    margin: '25px',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '1100px',
    // height: '100%',
    pomterEvents: 'none',
    overflow: 'hidden',
  },
  modal_img_cont_1: {
    top: '0px',
    height: '100%',
    background: 'var(--field-color)',
    content: 'default',
    postion: 'relative',
    borderRadius: '16px',
    pomterEvents: 'none',
    overflowX: 'hidden',
    scroollBevior: 'smooth',
  },
  modal_img_cont_2: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center', 
    MozBoxPack: 'center',
    gap: '8px',
    margin: '0px auto',
    scroollBevior: 'smooth',
    content: 'default',
    pomterEvents: 'none',
    overflow: 'hidden',
  },
  modal_img_cont_3: {
    height: 'inherit',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '16px',
    position: 'relative',
    pomterEvents: 'none',
  },
  modal_img: {
    cursor: 'pointer',
    zIndex: '1',
    positon: 'relative',
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    maxHeight: '500px',
    pomterEvents: 'none',
    overflow: 'hidden',
  },
  



  



  
  modal_groups_2: {
    content: 'default',
    padding: 0,
    margin: 0,
    flexBasis: 'auto',
    width: '90%',
    maxWidth: '1100px',
    // height: '100%',
    
    boxSizing: 'border-box',
  },
  modal_content_cont_1: {
    content: 'default',
    width: '100%',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
  },
  modal_content_cont_2: {
    content: 'default',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
  },
  modal_content_groups_1: {
    content: 'default',
    flexDirection: 'column',
    alignItems: 'flex-start',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    width: '100%',
    borderBottom: '1px solid var(--color-border-1)',
  },
  modal_content_groups_1_group_1: {
    content: 'default',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // height: '100%',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
  },
  modal_content_groups_1_group_1_g_1: {
    content: 'default',
    width: 'fit-content',
    // height: '100%',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
  },
  modal_content_groups_1_group_1_g_1_price: {
    whiteSpace: 'nowrap',
    fontWeight: '700',
    fontSize: '25px',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
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
  modal_content_groups_1_group_1_g_2: {
    content: 'default',
    display: 'flex',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    minWidth: '0px',
    maxWidth: '100%',
  },
  modal_content_groups_1_group_1_g_2_ul: {
    content: 'default',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    minWidth: '0px',
    maxWidth: '100%',
  },
  modal_content_groups_1_group_1_g_2_li: {
    content: 'default',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
    paddingLeft: '10px',
    // paddingRight: '10px',
    width: 'fit-content',
    height: '20px',
  },
  modal_content_groups_1_btns_cont_1: {
    content: 'default',
    // width: '25px',
    height: '30px',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
  },
  modal_content_groups_1_btns_cont_2: {
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'var(--field-color)',
    content: 'default',
    borderRadius: '8px',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
  },
  modal_content_groups_1_btns_cont_3: {
    paddingRight: '10px',
    paddingLeft: '10px',
    width: '100%',
    height: '100%',
  },
  modal_content_groups_1_btns_svg: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    marginTop: '5px !important',
    maxHeight: '20px',
    maxWidth: '20px',   
    postion: 'relative',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    fill: 'var(--icon-2)',
  },
  modal_content_groups_1_btns_name: {
    whiteSpace: 'nowrap',
    fontWeight: '500',
    fontSize: '17px',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--icon-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },
  modal_content_groups_1_group_2: {
    paddingBottom: '20px',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    content: 'default',
    justifyContent: 'center',    
  },
  modal_content_groups_1_group_2_title: {
    whiteSpace: 'pre-wrap',
    fontWeight: '500',
    fontSize: '25px',
    fontFamily: 'var(--font-1)',
    lineHeight: '35px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },
  modal_content_groups_2: {
    overflow: 'hidden',
    width: '100%',
    minWidth: '0px',
    maxWidth: '100%',
    height: 'fit-content',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    MozBoxAlign: 'center',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    paddingTop: '10px',
    paddingBottom: '20px',
    borderBottom: '1px solid var(--color-border-1)',
    // @ts-ignore
    "@media (max-width: 800px)": {
      flexDirection: 'column',
    },
  },
  modal_content_groups_2_g_1: {
    width: '60%',
    minWidth: '0px',
    maxWidth: '60%',
    // height: '100%',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    alignItems: 'flex-start',
    MozBoxAlign: 'center',
    justifyContent: 'flex-start',
    MozBoxPack: 'justify',
    //@ts-ignore
    '@media (max-width: 800px)': {
      width: '100%',
      maxWidth: '100%',
    },
  },
  modal_content_groups_2_g_1_cont_1: {
    content: 'default'
  },
  modal_content_description: {
    whiteSpace: 'pre-wrap',
    fontWeight: '500',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'flex-start',
    jusitfyContent: 'flex-start',
    textAlign: 'start',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },
  modal_content_groups_2_g_2: {
    width: '40%',
    minWidth: '0px',
    maxWidth: '100%',
    // height: '100%',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    //@ts-ignore
    "@media (max-width: 850px)": {
      width: '100%',
      maxWidth: '100%',
    },
  },
  modal_content_groups_2_g_2_g_1: {
    width: '100%',
    minWidth: '0px',
    maxWidth: '100%',
    height: '100%',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    MozBoxAlign: 'start',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    paddingLeft: '10px',
    paddingRight: '10px',
    //@ts-ignore
    "@media (max-width: 800px)": {
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '20px',
    },
  },
  modal_content_groups_2_g_2_date: {
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    textAlign: 'start',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-3)',
    overflow: 'hidden',
    display: 'flex',
    content: 'font default',
  },
  modal_content_groups_2_g_2_location: {
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    textAlign: 'start',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-3)',
    overflow: 'hidden',
    display: 'flex',
    content: 'font default',
  },
  modal_content_groups_2_g_2_pfcard_cont_1: {
    width: '300px',
    minWidth: '0px',
    maxWidth: '100%',
    height: '90px',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    MozBoxAlign: 'start',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    paddingLeft: '10px',
    paddingRight: '10px',
    borderRadius: '16px',
    backgroundColor: 'var(--field-color)',
    //@ts-ignore
    "@media (max-width: 800px)": {
      paddingLeft: '0px',
      paddingRight: '0px',
      marginTop: '20px',
    },
  },
  modal_content_groups_2_g_2_pfcard_cont_2: {
    width: '300px',
    minWidth: '0px',
    maxWidth: '100%',
    height: '75px',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    MozBoxAlign: 'start',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  modal_content_pf_g_1: {
    width: 'fit-content',
    height: '100%',
    content: 'default',
    alignItems: 'flex-start',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
  },
  modal_content_pf_name: {
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    textAlign: 'start',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-1)',
    overflow: 'hidden',
    display: 'flex',
    content: 'font default',
    paddingBottom: '10px',
  },
  modal_content_pf_username: {
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '18px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    textAlign: 'start',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-3)',
    overflow: 'hidden',
    display: 'flex',
    content: 'font default',
  },
  modal_content_pf_g_2: {
    width: '75px',
    height: '75px',
    maxWidth: '100%',
    content: 'default',
    borderRadius: 9999,
    display: 'block'
  },
  modal_content_pf_avatar: {
    width: '75px',
    height: '75px',
    maxWidth: '100%',
    content: 'default',
    borderRadius: 9999,
    display: 'block'
  },









  
  modal_groups_3: {
    width: '90%',
    minWidth: '0px',
    maxWidth: '1100px',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    paddingTop: '10px',
    overflow: 'hidden',
  },
  modal_groups_3_g_1: {
    content: 'default',
    background: 'var(--background)',
    zIndex: '1',
    width: '100%',
    paddingBottom: 10,
    borderBottom: '1px solid var(--color-border-1)',
  },
  modal_groups_input_cont_1: {
    background: 'var(--background)',
    content: 'default',
    width: '100%',
  },
  modal_groups_input_cont_2: {
    content: 'default',
    width: '100%',
  },
  modal_groups_input_cont_3: {
    content: 'default',
    width: '100%',
  },
  modal_groups_input_cont_4: {
    paddingLeft: '15px',
    paddingRight: '15px',
    content: 'default',
    width: '100%',
  },
  modal_groups_input_cont_5_groups: {
    content: 'default',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    width: '100%',
  },
  modal_groups_input_pfimg_cont_1: {
    flexBasis: '48px',
    marginRight: '12px',
    MozBoxFlex: '0',
    flexGrow: '0',
    content: 'default',
  },
  modal_groups_input_pfimg_cont_2: {
    height: '48px',
    width: '100%',
    overflow: 'visible',
    display: 'block',
    content: 'default',
  },
  modal_groups_input_pfimg_img: {
    content: 'default',
    width: '100%',
  },
  modal_groups_input_groups_2: {
    transitionTimingFunction: 'ease-out',
    transitionProperty: 'opacity, color',
    transitionDuration: '0.1s',
    position: 'static',
    paddingTop: '4px',
    MozBoxPack: 'center',
    justifyContent: 'center',
    flexBasis: '0px',
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
    width: '100%',
  },
  modal_groups_input_input_1: {
    zIndex: '1',
    content: 'default',
    width: '100%',
  },
  modal_groups_input_input_2: {
    MozBoxDirection: 'normal',
    MozBoxOrient: 'vertical',
    flexDirection: 'column',
    borderRadius: 4,
    // borderWidth: 2,
    // borderColor: 'var(----color-border-2)',
    // borderStyle: 'solid',
    display: 'flex',
    width: '100%',
  },
  modal_groups_input_input_3: {
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
    width: '100%',
  },
  modal_groups_input_input_4: {
    position: 'static',
    zIndex: '1',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'vertical',
    flexDirection: 'column',
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    display: 'flex',
    content: 'default',
    width: '100%',
  },
  modal_groups_input_input_5: {
    zIndex: '2',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    content: 'default',
    width: '100%',
  },
  searchbox_container_2: {
    MozBoxAlign: 'stretch',
    alignItems: 'stretch',
    flexBasis: '0px',
    MozBoxFLex: '1',
    flexGrow: '1',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    content: 'default',
    width: '100%',
  },
  searchbox_container_3: {
    zIndex: '4',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 0%',
    content: 'default',
    width: '100%',
  },
  searchbox_container_4: {
    minHeight: '0px',
    flexBasis: 'auto',
    boxSizing: 'border-box',
    border: '0px solid var(--color-border-off)',
    MozBoxAlign: 'stretch',
    alignItems: 'stretch',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
    minWidth: '0px',
    flexShrink: '1',
    zIndex: '0',
    position: 'relative',
    padding: '0px',
    margin: '0px',
    display: 'flex',
    width: '100%',
  },
  searchbox_container_5_form: {
    minHeight: '0px',
    minWidth: '0px',
    width: '100%',
    boxSizing: 'border-box',
    MozBoxAlign: 'stretch',
    alignItems: 'stretch',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
    zIndex: '0',
    position: 'relative',
    padding: '0px',
    margin: '0px',
    border: '0px solid',
    flex: '1 1 0%',
    display: 'flex',
  },
  searchbox_container_6: {
    flexShrink: '1',
    content: 'default',
    width: '100%',
  },
  searchbox_container_7: {
    backgroundColor: 'var(--background) !important',
    MozBoxDirection: 'normal',
    // position: 'absolute',    
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
    MozBoxPack: 'center',
    justifyContent: 'center',
    flexShrink: '1',
    MozBoxFLex: '1',
    flexGrow: '1',
    border: '1px solid var(--color-border-on)',
    // borderRadius: '9999px',
    content: 'default',
    width: '100%',

  },
  searchbox_container_8: {
    content: 'default',
    width: '100%',
  },
  searchbox_container_9_label: {
    cursor: 'text',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    content: 'default',
    width: '100%',
  },
  searchbox_container_11: {
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
    width: '100%',
  },
  searchbox_container_12: {
    fontWeight: 400,
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    display: 'flex',
    color: 'var(--color-text-2)',
    width: '100%',
  },  
  searchbox_container_input: {
    textAlign: 'left',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    resize: 'none',
    appearance: 'none',
    outlineStyle: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'var(--background) !important',
    width: '100%',
    // height: '100%',
    padding: '5px',
    borderWidth: '0px',
    borderRadius: '9999px',
    // position: 'absolute',
    zIndex: '3',
  },
  modal_groups_input_btn_1: {
    backgroundColor: 'rgb(255, 122, 0)',
    marginLeft: '12px',
    // opacity: '0.5',
    minWidth: '36px',
    minHeight: '36px',
    outlineStyle: 'none',
    transitionProperty: 'backgound-color, box-shadow',
    transitionDuration: '0.2',
    userSelect: 'none',
    paddingLeft: '16px',
    paddingRight: '16px',
    border: '1px solid var()',
    borderRadius: '9999px',
    content: 'default',
    cursor: 'pointer',
  },
  modal_groups_input_btn_2: {
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '18px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    color: 'var(--color-border-off)',
    overflow: 'hidden',
    display: 'flex',
    content: 'font default',
    MozBoxFlex: '1',
    flexGrow: '1',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    textAlign: 'center',
  },
  // modal_groups_input_btn_3_span: {
  // },




  
  modal_groups_3_g_2: {
    content: 'default',
    background: 'var(--background)',
    zIndex: '1',
    width: '100%',
    maxWidth: '1100px',
    minWidth: '0px',
    paddingBottom: 10,
    // borderBottom: '1px solid var(--color-border-1)',
  },
  modal_groups_g_2_cont: {
    paddingLeft: '15px',
    paddingRight: '15px',
    content: 'default',
    width: '100%',
  },
  modal_groups_g_2_comments_ul: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'vertical',
    flexDirection: 'column',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
  },
  modal_groups_g_2_comments_li: {
    flexDirection: 'column',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    paddingTop: '10px'
  },
  modal_groups_g_2_comments_cont_1: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
  },
  modal_groups_g_2_comments_cont_2: {
    content: 'default',
    width: '100%',
    maxWidth: '1100px',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'flex-start',
    alignItems: 'flex-start',
    MozBoxPack: 'justify',
    justifyContent: 'flex-start',
  },
  modal_groups_g_2_comments_g_1: {
    content: 'default',
    width: '48px',
    maxWidth: '100%',
    minWidth: '0px',
    height: 'auto !important',
    minHeight: '50px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'justify',
    justifyContent: 'flex-start',
  },
  modal_groups_g_2_comments_avatar_cont: {
    content: 'default',
    width: 48,
    height: 48,
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    marginRight: '15px',  
    marginLeft: '15px',
  },
  modal_groups_g_2_comments_g_2: {
    content: 'default',
    width: '100%  ',
    maxWidth: '100%',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'vertical',
    flexDirection: 'column',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
  },
  modal_groups_g_2_comments_g_2_header: {
    content: 'default',
    width: '100%',
    maxWidth: '1070px !important',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'vertical',
    flexDirection: 'column',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    MozBoxPack: 'justify',
    justifyContent: 'flex-start',
    marginLeft: '15px',
    '@media (max-width: 800px)': {
      width: '93%',
      maxWidth: '93%',
    }
  },
  modal_groups_g_2_comments_g_2_header_gropup_1: {
    content: 'default',
    width: '100%',
    maxWidth: '1070px !important',
    minWidth: '0px',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'center',
    alignItems: 'flex-start',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
  },
  modal_groups_g_2_comments_header: {
    content: 'default',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
  },
  modal_groups_g_2_comments_header_name: {
    whiteSpace: 'pre-wrap',
    fontWeight: '550',
    fontSize: '14px',
    fontFamily: 'var(--font-1)',
    lineHeight: '18px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    textAlign: 'start',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'font default',
    marginRight: '5px'
  },
  modal_groups_g_2_comments_header_username: {
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    fontSize: '14px',
    fontFamily: 'var(--font-1)',
    lineHeight: '18px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    textAlign: 'start',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-3)',
    overflow: 'hidden',
    display: 'flex',
    content: 'font default',
  },
  modal_groups_g_2_comments_header_btn_cont_1: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'calc(20px)',
    '@media (max-width: 800px)': {
      marginRight: 'calc(25px)',
    }
  },
  modal_groups_g_2_comments_header_btn_cont_2: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'liner',
    userSelect: 'none',
    ":hover": {
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'liner',
      backgroundColor: 'rgba(0, 0, 1, 0.2)'
    },
  },
  modal_groups_g_2_comments_header_btn_svg: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    maxHeight: '20px',
    maxWidth: '20px',   
    postion: 'relative',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    fill: 'var(--icon-1)',

  },
  modal_groups_g_2_comments_g_3: {
    width: '95%',
    minWidth: '0px',
    maxWidth: '95%',
    // height: '100%',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    alignItems: 'flex-start',
    MozBoxAlign: 'start',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    //@ts-ignore
    '@media (max-width: 800px)': {
      width: '95%',
      maxWidth: '95%',
    },
  },
  modal_groups_g_2_comments_comment: {
    whiteSpace: 'pre-wrap',
    fontWeight: '500',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: '5px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--title)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },










  modal_groups_4: {
    content: 'default',
    // position: 'fixed',
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
    flexDirection: 'coulmn',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'start',
    justifyContent: 'flex-start',
    overflowX: 'scroll',
    position: 'fixed',
    overflow: '-moz-scrollbars-none',
  },









  
  modal_groups_5: {
    content: 'default',
  },
});

