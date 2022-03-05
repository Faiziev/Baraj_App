import stylex from "@ladifire-opensource/stylex";
// import { Avatar, LoremIpsum, name, surname, username } from "react-lorem-ipsum";
import { useAnimation, motion } from "framer-motion";
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import moment from "moment";
import RelatedPosts from "../../components/realetedPost.tsx";
import FotterComp from "../../components/footer.tsx";
import { collection, onSnapshot, query, doc, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { Avatar } from '@nextui-org/react';
import { useSession, getSession } from "next-auth/react";
import { db } from "../../firebase";
// import { db } from '../../'


const isServer = () => typeof window === `undefined`;

export async function getServerSideProps({ query }) {
  
  const PostPage = query.postPage


  onSnapshot(doc(db, "posts", PostPage), (doc) => {
    post.push({ ...doc.data() })
  });
  let post = [' ']
  return {
    props: {
      postID: PostPage,
      ssrPosts: JSON.stringify(post) || [],
    },
  }
}
export default function PostItem({ postID, ssrPosts }) {
  const { asPath } = useRouter()
  const controls = useAnimation()
  const [loading, setLoading] = useState(false);
  const [imgLoad, setImgLoad] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([])
  const { data: session } = useSession();

  useEffect(() => onSnapshot(query(doc(db, 'posts', postID)),(doc) => setPosts(doc.data())),[])
  useEffect(() => onSnapshot(query(collection(db, 'posts', postID, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs)), [db])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    controls.start(i => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setImgLoad(true);
    }, 3000);
  }, []);

  const variants = {
    open: { opacity: 0, x: 0 },
    closed: { opacity: 1, x: "0px" },
  }
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
  
  const postPage = asPath.charAt(asPath.length - 1);
  // const data = items.find(obj=>obj.id === postPage);
  const date = moment(new Date(+(new Date()) - Math.floor(Math.random()*100))).format('MM/DD/YYYY');

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const itemIds = [0, 1, 2];
  const btns = [
    <svg className={stylex(styles.postPage_content_groups_1_btns_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>,
    <svg className={stylex(styles.postPage_content_groups_1_btns_svg)} id="Layer_1"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m20 4h-5a4 4 0 0 0 -4-4h-7a4 4 0 0 0 -4 4v19a1 1 0 0 0 2 0v-10h8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-5a4 4 0 0 0 -4-4zm-18 7v-7a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2zm20 2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2-2v-.142a4 4 0 0 0 3-3.858v-3h5a2 2 0 0 1 2 2z"/></svg>,
    <div className={stylex(styles.postPage_content_groups_1_btns_name)}><span className={stylex(styles.span)}>chat</span></div>,
  ];
  const ContentBtns = ({ i }) => {
    // const style = { border: `2px solid ${colors[i]}` };
    return (
      <motion.li custom={i} animate={controls} className={stylex(styles.postPage_content_groups_1_group_1_g_2_li)}>
        <div className={stylex(styles.postPage_content_groups_1_btns_cont_1)}>
          <div className={stylex(styles.postPage_content_groups_1_btns_cont_2)}>
            <div className={stylex(styles.postPage_content_groups_1_btns_cont_3)}>
              {btns[i]}
            </div>
          </div>
        </div>
      </motion.li>
    );
  };  
  const Comments = ({ comments_prop }) => {
    // const style = { border: `2px solid ${colors[i]}` };
    return (
      <motion.li className={stylex(styles.postPage_groups_g_2_comments_li)}>
        <div className={stylex(styles.postPage_groups_g_2_comments_cont_1)}>
          <div className={stylex(styles.postPage_groups_g_2_comments_cont_2)}>
            <div className={stylex(styles.postPage_groups_g_2_comments_g_1)}>
              <div className={stylex(styles.postPage_groups_g_2_comments_avatar_cont)}>
                <Avatar src={comments_prop.data().userImage} css={{ size: "$16" }}/>
              </div>
            </div>
            <div className={stylex(styles.postPage_groups_g_2_comments_g_2_header)}>
              <div className={stylex(styles.postPage_groups_g_2_comments_g_2_header_gropup_1)}>
                <div className={stylex(styles.postPage_groups_g_2_comments_header)}>
                  <div className={stylex(styles.postPage_groups_g_2_comments_header_name)}>
                    <span className={stylex(styles.span)}>
                      <span className={stylex(styles.span)}>
                        {/* {name('male')} {surname()} */}
                        {comments_prop.data().username}
                      </span>
                    </span>
                  </div>
                  <div className={stylex(styles.postPage_groups_g_2_comments_header_username)}>
                    <span className={stylex(styles.span)}>
                      <span className={stylex(styles.span)}>
                        {/* {`@${username()}`} */}
                        {comments_prop.data().email}
                      </span>
                    </span>
                  </div>
                </div>
                <div className={stylex(styles.postPage_groups_g_2_comments_header_btn_cont_1)}>
                  <div className={stylex(styles.postPage_groups_g_2_comments_header_btn_cont_2)}>
                    <svg className={stylex(styles.postPage_groups_g_2_comments_header_btn_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="2" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="22" cy="12" r="2"/></svg>
                  </div>
                </div>
              </div>
              <div className={stylex(styles.postPage_groups_g_2_comments_g_3)}>{/* for description */}
                <div className={stylex(styles.postPage_groups_g_2_comments_comment)}>
                  <div className={stylex(styles.postPage_content_description)}>
                    <span className={stylex(styles.span)}>
                      {/* <LoremIpsum p={1} avgSentencesPerParagraph={3}/> */}
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

  const router = useRouter()
  return (
    <>
      <div className={stylex(styles.postPage_cont_1)} >
        <div className={stylex(styles.postPage_cont_2)}>
          <div className={stylex(styles.postPage_cont_3)}>
            <div className={stylex(styles.postPage_groups_1)} >
              <div className={stylex(styles.postPage_img_cont_1)} >
                <div className={stylex(styles.postPage_img_cont_2)} >
                  <motion.div 
                    animate={'closed'}
                    variants={variants} 
                    className={stylex(styles.postPage_img_cont_3)} >
                    {imgLoad ? 
                      <img className={stylex(styles.postPage_img)}  src={posts.image} alt="" />
                      :
                      <div className={stylex(styles.skeleton)}></div>
                    }
                  </motion.div>
                </div>  
              </div>
            </div>
            <div className={stylex(styles.postPage_groups_2)}>
              <div className={stylex(styles.postPage_content_cont_1)}>
                <div className={stylex(styles.postPage_content_cont_2)}>
                  <div className={stylex(styles.postPage_content_groups_1)}>
                    <div className={stylex(styles.postPage_content_groups_1_group_1)}>{/* for price, like/flag/chat btns */}
                      <div className={stylex(styles.postPage_content_groups_1_group_1_g_1)}>
                          <div className={stylex(styles.postPage_content_groups_1_group_1_g_1_price)}>
                            <span className={stylex(styles.span)}>{/* price */}
                              {posts.price}$
                            </span>
                          </div>
                      </div>
                      <div className={stylex(styles.postPage_content_groups_1_group_1_g_2)}>{/* btns */}
                        <ul className={stylex(styles.postPage_content_groups_1_group_1_g_2_ul)}>
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
                      className={stylex(styles.postPage_content_groups_1_group_2)}>{/* for title  */}
                      <div className={stylex(styles.postPage_content_groups_1_group_2_title)}>
                        <span className={stylex(styles.span)}>
                          {posts.title}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div className={stylex(styles.postPage_content_groups_2)}>
                    <div className={stylex(styles.postPage_content_groups_2_g_1)}>{/* for description */}
                      <div className={stylex(styles.postPage_content_groups_2_g_1_cont_1)}>
                        <div className={stylex(styles.postPage_content_description)}>
                          <span className={stylex(styles.span)}>
                            {posts.description}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={stylex(styles.postPage_content_groups_2_g_2)}>{/* for another informations */}
                      <div className={stylex(styles.postPage_content_groups_2_g_2_g_1)}>
                        <div className={stylex(styles.postPage_content_groups_2_g_2_date)}>{/* for date */}
                          <span className={stylex(styles.span)}>
                            {date}
                          </span>
                        </div>
                        <div className={stylex(styles.postPage_content_groups_2_g_2_location)}>{/* for location */}
                          <span className={stylex(styles.span)}>
                            {posts.location}
                          </span>
                        </div>
                        <div className={stylex(styles.postPage_content_groups_2_g_2_pfcard_cont_1)}>{/* user profile card */}
                          <div className={stylex(styles.postPage_content_groups_2_g_2_pfcard_cont_2)}>
                            <div className={stylex(styles.postPage_content_pf_g_1)}>
                              <div className={stylex(styles.postPage_content_pf_name)}>
                                <span className={stylex(styles.span)}>
                                  {posts.username}
                                </span>
                              </div>
                              <div className={stylex(styles.postPage_content_pf_username)}>
                                <span className={stylex(styles.span)}>
                                  {posts.email}
                                </span>
                              </div>
                            </div>
                            <div className={stylex(styles.postPage_content_pf_g_2)}>{/* users avatar */}
                              <div className={stylex(styles.postPage_content_pf_avatar)}>
                                <Avatar src={posts.profileImg} css={{ size: "$20" }} />
                                {/* <Avatar gender='male' className="avatar" width="75" height="75" alt="Avatar" /> */}
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
            <div className={stylex(styles.postPage_groups_3)}>
              <div className={stylex(styles.postPage_groups_3_g_1)}>{/* for input bar */}
                <div className={stylex(styles.postPage_groups_input_cont_1)}>
                  <div className={stylex(styles.postPage_groups_input_cont_2)}>
                    <div className={stylex(styles.postPage_groups_input_cont_3)}>
                      <div className={stylex(styles.postPage_groups_input_cont_4)}>
                        <div className={stylex(styles.postPage_groups_input_cont_5_groups)}>
                          <div className={stylex(styles.postPage_groups_input_pfimg_cont_1)}>
                            <div className={stylex(styles.postPage_groups_input_pfimg_cont_2)}>
                              <Avatar src={posts.profileImg} css={{ size: "$17" }} />
                            </div>
                          </div>
                          <div className={stylex(styles.postPage_groups_input_groups_2)}>
                            <div className={stylex(styles.postPage_groups_input_input_1)}>
                              <div className={stylex(styles.postPage_groups_input_input_2)}>
                                <div className={stylex(styles.postPage_groups_input_input_3)}>
                                  <div className={stylex(styles.postPage_groups_input_input_4)}>
                                    <div className={stylex(styles.postPage_groups_input_input_5)}>
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
                                      <div className={stylex(styles.postPage_groups_input_btn_1)} aria-disabled="true" role="button" type='submit' disabled={!comment.trim()} onClick={sendComment}>
                                        <div className={stylex(styles.postPage_groups_input_btn_2)} dir="auto" >
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
              <div className={stylex(styles.postPage_groups_3_g_2)}> {/* for comments */}
                <div className={stylex(styles.postPage_groups_g_2_cont)}>
                  <motion.ul
                    className={stylex(styles.postPage_groups_g_2_comments_ul)}>
                    {comments.map(comment => (
                      <Comments key={comment.id} comments_prop={comment} />
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
            <div className={stylex(styles.postPage_groups_4)}>
              <RelatedPosts />
            </div>
            <div className={stylex(styles.postPage_groups_5)}>
              <FotterComp />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



const styles = stylex.create({
  skeleton: {
    // background: '#eee';
    background: 'var(--skeleton)',
    borderRadius: '5px',
    backgroundSize: '200% 100%',
    animation: '1.5s shine linear infinite',
    width: '100%',
    height: '500px',
  },



  // the full page style
  postPage_cont_1: {
    content: 'default',
    width: '100vw',
    // height: '100%',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center', 
    MozBoxPack: 'justify',
    paddingTop: '50px',
    pointerEvents: 'auto'
  },
  postPage_cont_2: {
    content: 'default',
    width: '90vw',
    maxWidth: '1100px',
    // height: '100vh',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center', 
    MozBoxPack: 'justify',
  },
  postPage_cont_3: {
    width: '100%',
    height: '100%',
    content: 'default',
    alignItems: 'center',
    MozBoxAlign: 'center',
    // justifyContent: 'center', 
    MozBoxPack: 'justify',
  },
  postPage_groups_1: {
    contet: 'default',
    margin: '25px',
    borderRadius: '16px',
    width: '90vw',
    maxWidth: '1100px',
    pomterEvents: 'none',
    overflow: 'hidden',
  },
  postPage_img_cont_1: {
    height: '100%',
    background: 'var(--field-color)',
    content: 'default',
    postion: 'relative',
    borderRadius: '16px',
    pomterEvents: 'none',
    overflow: 'hidden',
  },
  postPage_img_cont_2: {
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
  postPage_img_cont_3: {
    // height: 'inherit',
    overflow: 'hidden',
    width: '100%',
    height: '499px',
    borderRadius: '16px',
    position: 'relative',
    pomterEvents: 'none',
    alignItems:' center',
    justifyContent: 'center',
    content: 'default',
    // maxWidth: '480px',
  },
  postPage_img: {
    // width: '500px',
    // height: '500px',
    // backgroundPosition: 'center'
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
  postPage_groups_2: {
    content: 'default',
    padding: 0,
    margin: 0,
    flexBasis: 'auto',
    width: '100%',
    // height: '100%',
    
    boxSizing: 'border-box',
  },
  postPage_content_cont_1: {
    content: 'default',
    width: '100%',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
  },
  postPage_content_cont_2: {
    content: 'default',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
  },
  postPage_content_groups_1: {
    content: 'default',
    flexDirection: 'column',
    alignItems: 'flex-start',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
    width: '100%',
    borderBottom: '1px solid var(--color-border-1)',
  },
  postPage_content_groups_1_group_1: {
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
  postPage_content_groups_1_group_1_g_1: {
    content: 'default',
    width: 'fit-content',
    // height: '100%',
    alignItems: 'center',
    MozBoxAlign: 'center',
    MozBoxPack: 'center',
    justifyContent: 'center',
  },
  postPage_content_groups_1_group_1_g_1_price: {
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
  postPage_content_groups_1_group_1_g_2: {
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
  postPage_content_groups_1_group_1_g_2_ul: {
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
  postPage_content_groups_1_group_1_g_2_li: {
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
  postPage_content_groups_1_btns_cont_1: {
    content: 'default',
    // width: '25px',
    height: '30px',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
  },
  postPage_content_groups_1_btns_cont_2: {
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
  postPage_content_groups_1_btns_cont_3: {
    paddingRight: '10px',
    paddingLeft: '10px',
    width: '100%',
    height: '100%',
  },
  postPage_content_groups_1_btns_svg: {
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
  postPage_content_groups_1_btns_name: {
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
  postPage_content_groups_1_group_2: {
    paddingBottom: '20px',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    content: 'default',
    justifyContent: 'center',   
  },
  postPage_content_groups_1_group_2_title: {
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
  postPage_content_groups_2: {
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
  postPage_content_groups_2_g_1: {
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
  postPage_content_groups_2_g_1_cont_1: {
    content: 'default'
  },
  postPage_content_description: {
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
  postPage_content_groups_2_g_2: {
    width: '60%',
    minWidth: '0px',
    maxWidth: '60%',
    // height: '100%',
    content: 'default',
    boxSizing: 'border-box',
    dislay: 'flex',
    
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'space-between',
    MozBoxPack: 'justify',
    //@ts-ignore
    "@media (max-width: 800px)": {
      width: '100%',
      maxWidth: '100%',
    },
  },
  postPage_content_groups_2_g_2_g_1: {
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
  postPage_content_groups_2_g_2_date: {
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
  postPage_content_groups_2_g_2_location: {
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
  postPage_content_groups_2_g_2_pfcard_cont_1: {
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
  postPage_content_groups_2_g_2_pfcard_cont_2: {
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
  postPage_content_pf_g_1: {
    width: 'fit-content',
    height: '100%',
    content: 'default',
    alignItems: 'flex-start',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
  },
  postPage_content_pf_name: {
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
  postPage_content_pf_username: {
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
  postPage_content_pf_g_2: {
    width: '75px',
    height: '75px',
    maxWidth: '100%',
    content: 'default',
    borderRadius: 9999,
    display: 'block'
  },
  postPage_content_pf_avatar: {
    width: '75px',
    height: '75px',
    maxWidth: '100%',
    content: 'default',
    borderRadius: 9999,
    display: 'block'
  },










  postPage_groups_3: {
    width: '100%',
    minWidth: '0px',
    maxWidth: '100%',
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
  postPage_groups_3_g_1: {
    content: 'default',
    background: 'var(--background)',
    zIndex: '1',
    width: '100%',
    paddingBottom: 10,
    borderBottom: '1px solid var(--color-border-1)',
  },
  postPage_groups_input_cont_1: {
    background: 'var(--background)',
    content: 'default',
    width: '100%',
  },
  postPage_groups_input_cont_2: {
    content: 'default',
    width: '100%',
  },
  postPage_groups_input_cont_3: {
    content: 'default',
    width: '100%',
  },
  postPage_groups_input_cont_4: {
    paddingLeft: '15px',
    paddingRight: '15px',
    content: 'default',
    width: '100%',
  },
  postPage_groups_input_cont_5_groups: {
    content: 'default',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    width: '100%',
  },
  postPage_groups_input_pfimg_cont_1: {
    flexBasis: '48px',
    marginRight: '12px',
    MozBoxFlex: '0',
    flexGrow: '0',
    content: 'default',
  },
  postPage_groups_input_pfimg_cont_2: {
    height: '48px',
    width: '100%',
    overflow: 'visible',
    display: 'block',
    content: 'default',
  },
  postPage_groups_input_pfimg_img: {
    content: 'default',
    width: '100%',
  },
  postPage_groups_input_groups_2: {
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
  postPage_groups_input_input_1: {
    zIndex: '1',
    content: 'default',
    width: '100%',
  },
  postPage_groups_input_input_2: {
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
  postPage_groups_input_input_3: {
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
    width: '100%',
  },
  postPage_groups_input_input_4: {
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
  postPage_groups_input_input_5: {
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
  postPage_groups_input_btn_1: {
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
  postPage_groups_input_btn_2: {
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
  // postPage_groups_input_btn_3_span: {
  // },




  
  postPage_groups_3_g_2: {
    content: 'default',
    background: 'var(--background)',
    zIndex: '1',
    width: '90vw',
    maxWidth: '1100px',
    minWidth: '0px',
    paddingBottom: 10,
    // borderBottom: '1px solid var(--color-border-1)',
  },
  postPage_groups_g_2_cont: {
    paddingLeft: '15px',
    paddingRight: '15px',
    content: 'default',
    width: '100%',
  },
  postPage_groups_g_2_comments_ul: {
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
  postPage_groups_g_2_comments_li: {
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
  postPage_groups_g_2_comments_cont_1: {
    content: 'default',
    width: '100%',
    maxWidth: '100%',
    minWidth: '0px',
  },
  postPage_groups_g_2_comments_cont_2: {
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
  postPage_groups_g_2_comments_g_1: {
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
  postPage_groups_g_2_comments_avatar_cont: {
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
  postPage_groups_g_2_comments_g_2: {
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
  postPage_groups_g_2_comments_g_2_header: {
    content: 'default',
    width: '95%',
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
  postPage_groups_g_2_comments_g_2_header_gropup_1: {
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
  postPage_groups_g_2_comments_header: {
    content: 'default',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
  },
  postPage_groups_g_2_comments_header_name: {
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
  postPage_groups_g_2_comments_header_username: {
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
  postPage_groups_g_2_comments_header_btn_cont_1: {
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
  postPage_groups_g_2_comments_header_btn_cont_2: {
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
  postPage_groups_g_2_comments_header_btn_svg: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    // marginTop: '5px !important',
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
  postPage_groups_g_2_comments_g_3: {
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
  postPage_groups_g_2_comments_comment: {
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
  
  // postPage_content_groups_2_g_1: {
  //   width: '60%',
  //   minWidth: '0px',
  //   maxWidth: '60%',
  //   // height: '100%',
  //   content: 'default',
  //   boxSizing: 'border-box',
  //   dislay: 'flex',
  //   alignItems: 'center',
  //   MozBoxAlign: 'center',
  //   justifyContent: 'space-between',
  //   MozBoxPack: 'justify',
  //   //@ts-ignore
  //   '@media (max-width: 800px)': {
  //     width: '100%',
  //     maxWidth: '100%',
  //   },
  // },
  // postPage_content_groups_2_g_1_cont_1: {
  //   content: 'default'
  // },
  // postPage_content_description: {
  //   whiteSpace: 'pre-wrap',
  //   fontWeight: '500',
  //   fontSize: '15px',
  //   fontFamily: 'var(--font-1)',
  //   lineHeight: '5px',
  //   overflowWrap: 'break-word',
  //   minWidth: '0px',
  //   MozBoxAlign: 'center',
  //   alignItems: 'center',
  //   color: 'var(--title)',
  //   overflow: 'hidden',
  //   display: 'flex',
  //   content: 'default',
  // },

  postPage_groups_4: {
    content: 'default',
  },










  
  postPage_groups_5: {
    content: 'default',
  },
});