//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { Profile_info_sm } from "./profile_comps.tsx";
import { Header_buttons } from "./buttons/header_buttons.tsx";
import { EmptyPage } from "./Pages/emptyPage.tsx";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { MobilFooter } from './mobileFooter.tsx';

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      window.addEventListener("resize", handleResize);
     
      handleResize();
    
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}


export default function Layout({ children }) {
  const size = useWindowSize();
  const router = useRouter();
  const [sideBar, setSideBar] = React.useState(false);
  
  const { asPath } = useRouter()
  const pageId = asPath.charAt(asPath.length - 1);
  const PageValue = `/p/${pageId}` == asPath
  const createPage = '/create/select'
  const { data: session } = useSession();
  return (
    <AnimatePresence>
      <div  style={{height: "100%", display: 'flex'}}>
        <Sidebar {...{ sideBar, setSideBar }} />
        <div className={stylex(styles.container_1)}>
            <div className={stylex(styles.container_2)}>
              <motion.div 
                animate={{
                  scale: sideBar  ? 0.8 : 1,
                  opacity: sideBar ? 0.5 : 1
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className={stylex(styles.container_3)}
                // style={{ overflowY: 'hidden'}}
                > 
                {router.asPath == createPage ? 
                  <motion.div>
                    <EmptyPage page_title="Create New Post" apology="This page is not ready yet" description="When you want to sell a product, you'll post it from here."/>
                  </motion.div>
                  :
                  <></>
                }
                {asPath !== '/auth/signin' && asPath !== '/welcome' && asPath !== '/'? 
                <header className={stylex(styles.container_header_1)} role="banner">
                  <div className={stylex(styles.container_header_2)} style={{ visibility: 'revert' }}>
                    <div className={stylex(styles.container_header_3)}>
                      <div className={stylex(styles.container_header_4)}>
                          {/* Logo */}
                        <div className={stylex(styles.group_1_containers_1)}> 
                        {size.width < 750 ?
                          <div className={stylex(styles.modal_groups_input_pfimg_cont_1)} onClick={() => setSideBar((sideBar) => !sideBar)}>
                            <div className={stylex(styles.modal_groups_input_pfimg_cont_2)}>
                              {session ? <>
                                <Avatar src={session?.user?.image} css={{ size: "$10" }} />
                              </>
                              :
                              <Avatar
                                onClick={() => setSideBar((sideBar) => !sideBar)}
                                style={{marginLeft: '-5px'}}
                                css={{ size: "$15" }}
                                size={15}
                                icon={
                                  <svg className={stylex(styles.sidelist_container_svg_2)} onClick={() => router.push('/welcome'), () => setSideBar((sideBar) => !sideBar)}    xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                                }
                              />
                              }
                            </div>
                          </div>
                          :
                          <>
                          <div className={stylex(styles.group_1_child_containers_1)} onClick={() => setSideBar((sideBar) => !sideBar)}>
                            <div className={stylex(styles.icons_style_center)}>
                              <div className={stylex(styles.svg_container)}>
                                  <svg className={stylex(styles.svg_icon)} xmlns="http://www.w3.org/2000/svg"  id="Outline" ><path d="M1,6H23a1,1,0,0,0,0-2H1A1,1,0,0,0,1,6Z"/><path d="M5,9a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/><path d="M19,19H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/><path d="M23,14H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/></svg>
                              </div>
                            </div>
                          </div>
                          <Link href="/home">
                            <div className={stylex(styles.group_1_child_containers_2_main)}>
                              <div className={stylex(styles.group_1_child_containers_2)}>
                                <h1 role="heading" className={stylex(styles.group_1_child_containers_2_h1)}>
                                  <div aria-label="Baraa" role="link" className={stylex(styles.group_1_child_containers_2_link)}>
                                      <div dir="auto" className={stylex(styles.group_1_child_containers_2_div)}>
                                        <svg className={stylex(styles.group_1_child_containers_2_svg)} viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clipPath="url(#clip0_144_8)">
                                          <path d="M28.3127 26.9616C28.3127 26.9616 30.9411 26.8863 32 23.2319L29.5789 0.83023C29.5505 0.603072 29.4355 0.393226 29.2553 0.23937C29.075 0.0855145 28.8416 -0.00197959 28.598 -0.00697899H16.4347C16.1982 -0.00697899 15.9714 0.0812261 15.8042 0.238233C15.6369 0.39524 15.543 0.608189 15.543 0.83023V26.993" fill="url(#paint0_linear_144_8)"/>
                                          <path d="M3.76303 26.9623C3.76303 26.9623 1.07443 26.887 -0.0090332 23.2326L2.46776 0.837209C2.49671 0.609874 2.61212 0.399997 2.79275 0.246177C2.97338 0.0923567 3.2071 0.00493702 3.45091 0H15.9352C16.1717 0 16.3986 0.0882051 16.5658 0.245212C16.733 0.40222 16.827 0.615168 16.827 0.837209V26.9937" fill="url(#paint1_linear_144_8)"/>
                                          <mask id="path-3-outside-1_144_8" maskUnits="userSpaceOnUse" x="4.91748" y="11.5116" width="22" height="11" fill="black">
                                          <rect fill="white" x="4.91748" y="11.5116" width="22" height="11"/>
                                          <path d="M22.7662 11.5116C22.7662 13.2358 22.0367 14.8893 20.7381 16.1085C19.4395 17.3277 17.6783 18.0126 15.8418 18.0126C14.0054 18.0126 12.2441 17.3277 10.9456 16.1085C9.64701 14.8893 8.91748 13.2358 8.91748 11.5116"/>
                                          </mask>
                                          <path d="M18.7662 11.5116C18.7662 12.0906 18.5235 12.701 18.0002 13.1923L23.476 19.0247C25.5498 17.0776 26.7662 14.381 26.7662 11.5116H18.7662ZM18.0002 13.1923C17.4684 13.6917 16.696 14.0126 15.8418 14.0126V22.0126C18.6606 22.0126 21.4107 20.9637 23.476 19.0247L18.0002 13.1923ZM15.8418 14.0126C14.9877 14.0126 14.2153 13.6917 13.6834 13.1923L8.20772 19.0247C10.273 20.9637 13.0231 22.0126 15.8418 22.0126V14.0126ZM13.6834 13.1923C13.1601 12.701 12.9175 12.0906 12.9175 11.5116H4.91748C4.91748 14.381 6.1339 17.0777 8.20772 19.0247L13.6834 13.1923Z" fill="white" mask="url(#path-3-outside-1_144_8)"/>
                                          </g>
                                          <defs>
                                          <linearGradient id="paint0_linear_144_8" x1="2.45227" y1="-0.000693488" x2="28.9575" y2="26.8918" gradientUnits="userSpaceOnUse">
                                          <stop offset="0.254885" stopColor="#E0245E"/>
                                          <stop offset="0.799254" stopColor="#FFAD1F"/>
                                          </linearGradient>
                                          <linearGradient id="paint1_linear_144_8" x1="2.6751" y1="4.27973e-07" x2="28.9236" y2="27.4012" gradientUnits="userSpaceOnUse">
                                          <stop offset="0.239035" stopColor="#E0245E"/>
                                          <stop offset="0.786292" stopColor="#FFAD1F"/>
                                          </linearGradient>
                                          <clipPath id="clip0_144_8">
                                          <rect width="32" height="27" fill="white"/>
                                          </clipPath>
                                          </defs>
                                          </svg>
                                        <span></span>
                                      </div>
                                  </div>
                                </h1>
                              </div>
                              <div className={stylex(styles.group_1_child_containers_3)}>
                                <h1 role="heading" className={stylex(styles.group_1_child_containers_2_h1)}>
                                  <a href="/home" aria-label="Baraa" role="link" className={stylex(styles.group_1_child_containers_2_link)}>
                                      <div dir="auto" className={stylex(styles.group_1_child_containers_2_div)}>
                                        <svg className={stylex(styles.group_1_child_containers_2_svg_2)} viewBox="0 0 81 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M7.40625 10.6895H2.36133L2.33398 8.57031H6.91406C7.67057 8.57031 8.33138 8.44271 8.89648 8.1875C9.46159 7.93229 9.89909 7.56771 10.209 7.09375C10.528 6.61068 10.6875 6.03646 10.6875 5.37109C10.6875 4.64193 10.5462 4.04948 10.2637 3.59375C9.99023 3.12891 9.56641 2.79167 8.99219 2.58203C8.42708 2.36328 7.70703 2.25391 6.83203 2.25391H2.94922V20H0.310547V0.09375H6.83203C7.85286 0.09375 8.76432 0.198568 9.56641 0.408203C10.3685 0.608724 11.0475 0.927734 11.6035 1.36523C12.1686 1.79362 12.597 2.34049 12.8887 3.00586C13.1803 3.67122 13.3262 4.46875 13.3262 5.39844C13.3262 6.21875 13.1165 6.96159 12.6973 7.62695C12.278 8.2832 11.6947 8.82096 10.9473 9.24023C10.209 9.65951 9.3431 9.92839 8.34961 10.0469L7.40625 10.6895ZM7.2832 20H1.32227L2.8125 17.8535H7.2832C8.12174 17.8535 8.83268 17.7077 9.41602 17.416C10.0085 17.1243 10.4596 16.7142 10.7695 16.1855C11.0794 15.6478 11.2344 15.0143 11.2344 14.2852C11.2344 13.5469 11.1022 12.9089 10.8379 12.3711C10.5736 11.8333 10.1589 11.4186 9.59375 11.127C9.02865 10.8353 8.29948 10.6895 7.40625 10.6895H3.64648L3.67383 8.57031H8.81445L9.375 9.33594C10.332 9.41797 11.1432 9.69141 11.8086 10.1562C12.474 10.612 12.9798 11.1953 13.3262 11.9062C13.6816 12.6172 13.8594 13.401 13.8594 14.2578C13.8594 15.4974 13.5859 16.5456 13.0391 17.4023C12.5013 18.25 11.7402 18.8971 10.7559 19.3438C9.77148 19.7812 8.61393 20 7.2832 20ZM24.715 1.85742L18.1252 20H15.4318L23.0197 0.09375H24.756L24.715 1.85742ZM30.2384 20L23.6349 1.85742L23.5939 0.09375H25.3302L32.9455 20H30.2384ZM29.8966 12.6309V14.791H18.713V12.6309H29.8966ZM35.2015 0.09375H41.7913C43.2861 0.09375 44.5485 0.321615 45.5784 0.777344C46.6175 1.23307 47.4059 1.90755 47.9437 2.80078C48.4905 3.6849 48.764 4.77409 48.764 6.06836C48.764 6.97982 48.5771 7.8138 48.2034 8.57031C47.8389 9.31771 47.3102 9.95573 46.6175 10.4844C45.9339 11.0039 45.1136 11.3913 44.1566 11.6465L43.4183 11.9336H37.2249L37.1976 9.78711H41.8734C42.8213 9.78711 43.6097 9.62305 44.2386 9.29492C44.8675 8.95768 45.3415 8.50651 45.6605 7.94141C45.9795 7.3763 46.139 6.75195 46.139 6.06836C46.139 5.30273 45.9886 4.63281 45.6878 4.05859C45.387 3.48438 44.9131 3.04232 44.2659 2.73242C43.6279 2.41341 42.803 2.25391 41.7913 2.25391H37.8402V20H35.2015V0.09375ZM46.8363 20L41.9964 10.9766L44.7445 10.9629L49.6527 19.8359V20H46.8363ZM59.4145 1.85742L52.8247 20H50.1313L57.7192 0.09375H59.4555L59.4145 1.85742ZM64.938 20L58.3345 1.85742L58.2934 0.09375H60.0298L67.645 20H64.938ZM64.5962 12.6309V14.791H53.4126V12.6309H64.5962ZM78.2545 14.1895V0.09375H80.8795V14.1895C80.8795 15.502 80.6107 16.6094 80.0729 17.5117C79.5351 18.4141 78.7923 19.1022 77.8444 19.5762C76.9056 20.041 75.8255 20.2734 74.6041 20.2734C73.3828 20.2734 72.2982 20.0638 71.3502 19.6445C70.4023 19.2253 69.6595 18.5872 69.1217 17.7305C68.584 16.8737 68.3151 15.7936 68.3151 14.4902H70.9538C70.9538 15.3288 71.1087 16.0169 71.4186 16.5547C71.7285 17.0924 72.1569 17.4889 72.7038 17.7441C73.2597 17.9993 73.8932 18.127 74.6041 18.127C75.2968 18.127 75.9166 17.9811 76.4635 17.6895C77.0195 17.3887 77.457 16.9466 77.776 16.3633C78.095 15.7708 78.2545 15.0462 78.2545 14.1895Z" fill="url(#paint0_linear_42_726)"/>
                                          <defs>
                                          <linearGradient id="paint0_linear_42_726" x1="0.991303" y1="3.10345" x2="60.2333" y2="18.7617" gradientUnits="userSpaceOnUse">
                                          <stop stopColor="#E0245E"/>
                                          <stop offset="1" stopColor="#FFAD1F"/>
                                          </linearGradient>
                                          </defs>
                                        </svg>
                                        <span></span>
                                      </div>
                                  </a>
                                </h1>
                              </div>
                            </div>
                          </Link>
                          </>
                        }
                        </div>
                        
                        <div className={stylex(styles.group_2_containers_2)}>
                          <div className={stylex(styles.searchbox_container_1)}>
                            <div className={stylex(styles.searchbox_container_2)}>
                                <div className={stylex(styles.searchbox_container_3)}>
                                  <div className={stylex(styles.searchbox_container_4)}>
                                      <form className={stylex(styles.searchbox_container_5_form)} action="#" aria-label="Search" role="search" >
                                        <div className={stylex(styles.searchbox_container_6)}>
                                          <div className={stylex(styles.searchbox_container_7)}>
                                            <div className={stylex(styles.searchbox_container_8)}>
                                              <label className={stylex(styles.searchbox_container_9_label)} >
                                                <div className={stylex(styles.searchbox_container_10)}>
                                                  <svg className={stylex(styles.searchbox_container_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" ><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>
                                                </div>
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
                            {/* <div className={stylex(styles.searchbox_result_box_container_1)}>

                            </div> */}
                          </div>
                        </div>

                        <div className={stylex(styles.group_3_containers_3)}>
                          {/* if the screen is smaller than 750vw than hide all buttons and show logo */}
                          {size.width < 750 ?
                            <Link href="/home">
                              <div className={stylex(styles.group_1_child_containers_2_main)}>
                                <div className={stylex(styles.group_1_child_containers_2)}>
                                  <h1 role="heading" className={stylex(styles.group_1_child_containers_2_h1)}>
                                    <div aria-label="Baraa" role="link" className={stylex(styles.group_1_child_containers_2_link)}>
                                        <div dir="auto" className={stylex(styles.group_1_child_containers_2_div)}>
                                          <svg className={stylex(styles.group_1_child_containers_2_svg)} viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_144_8)">
                                            <path d="M28.3127 26.9616C28.3127 26.9616 30.9411 26.8863 32 23.2319L29.5789 0.83023C29.5505 0.603072 29.4355 0.393226 29.2553 0.23937C29.075 0.0855145 28.8416 -0.00197959 28.598 -0.00697899H16.4347C16.1982 -0.00697899 15.9714 0.0812261 15.8042 0.238233C15.6369 0.39524 15.543 0.608189 15.543 0.83023V26.993" fill="url(#paint0_linear_144_8)"/>
                                            <path d="M3.76303 26.9623C3.76303 26.9623 1.07443 26.887 -0.0090332 23.2326L2.46776 0.837209C2.49671 0.609874 2.61212 0.399997 2.79275 0.246177C2.97338 0.0923567 3.2071 0.00493702 3.45091 0H15.9352C16.1717 0 16.3986 0.0882051 16.5658 0.245212C16.733 0.40222 16.827 0.615168 16.827 0.837209V26.9937" fill="url(#paint1_linear_144_8)"/>
                                            <mask id="path-3-outside-1_144_8" maskUnits="userSpaceOnUse" x="4.91748" y="11.5116" width="22" height="11" fill="black">
                                            <rect fill="white" x="4.91748" y="11.5116" width="22" height="11"/>
                                            <path d="M22.7662 11.5116C22.7662 13.2358 22.0367 14.8893 20.7381 16.1085C19.4395 17.3277 17.6783 18.0126 15.8418 18.0126C14.0054 18.0126 12.2441 17.3277 10.9456 16.1085C9.64701 14.8893 8.91748 13.2358 8.91748 11.5116"/>
                                            </mask>
                                            <path d="M18.7662 11.5116C18.7662 12.0906 18.5235 12.701 18.0002 13.1923L23.476 19.0247C25.5498 17.0776 26.7662 14.381 26.7662 11.5116H18.7662ZM18.0002 13.1923C17.4684 13.6917 16.696 14.0126 15.8418 14.0126V22.0126C18.6606 22.0126 21.4107 20.9637 23.476 19.0247L18.0002 13.1923ZM15.8418 14.0126C14.9877 14.0126 14.2153 13.6917 13.6834 13.1923L8.20772 19.0247C10.273 20.9637 13.0231 22.0126 15.8418 22.0126V14.0126ZM13.6834 13.1923C13.1601 12.701 12.9175 12.0906 12.9175 11.5116H4.91748C4.91748 14.381 6.1339 17.0777 8.20772 19.0247L13.6834 13.1923Z" fill="white" mask="url(#path-3-outside-1_144_8)"/>
                                            </g>
                                            <defs>
                                            <linearGradient id="paint0_linear_144_8" x1="2.45227" y1="-0.000693488" x2="28.9575" y2="26.8918" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.254885" stopColor="#E0245E"/>
                                            <stop offset="0.799254" stopColor="#FFAD1F"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_144_8" x1="2.6751" y1="4.27973e-07" x2="28.9236" y2="27.4012" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.239035" stopColor="#E0245E"/>
                                            <stop offset="0.786292" stopColor="#FFAD1F"/>
                                            </linearGradient>
                                            <clipPath id="clip0_144_8">
                                            <rect width="32" height="27" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                          <span></span>
                                        </div>
                                    </div>
                                  </h1>
                                </div>
                              </div>
                            </Link>
                            :
                            <>
                              {session ? 
                                <>
                                  <Header_buttons/>
                                </>
                                :
                                <>
                                  <Button onClick={() => router.push('/welcome')} style={{marginRight: '20px'}} auto color="warning" rounded bordered>
                                    Log In
                                  </Button>
                                </>
                              }
                            </>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stylex(styles.header_border)}></div>
                </header>
                :
                <></>
                }
                {size.width < 750 && asPath !== '/auth/signin' && asPath !== '/welcome' && asPath !== '/' ?
                  <MobilFooter />
                :   
                <>

                </>
                }
                {children}
              </motion.div>
            </div>
        </div>
      </div>
    </AnimatePresence>
  )
}




const styles = stylex.create({
  container_1: {
    pointerEvents: 'none !important',
    flex: '1 1 0%',
    content: 'default',
    overflowX: 'hidden',
    width: '96vw',
    alignItems: 'flex-start'
  },
  container_2: {
    pointerEvents: 'none !important',
    flex: '1 1 0%',
    content: 'default',
  },
  container_3: {
    zIndex: '0',
    pointerEvents: 'auto',
    // position: 'absolute',
    top: '0px',
    right: '0px',
    left: '0px',
    minHeight: '500px',
    width: '100%', 
  },

  modal_groups_input_pfimg_cont_1: {
    flexBasis: '40px',
    marginRight: '12px',
    MozBoxFlex: '0',
    flexGrow: '0',
    content: 'default',
    boxShadow: 'var(--boxShadow-1)',
    height: '100%',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
    cursor: 'pointer',
  },
  modal_groups_input_pfimg_cont_2: {
    height: '40px',
    width: '100%',
    overflow: 'visible',
    display: 'block',
    content: 'default',
    alignItems: 'center',
    MozBoxAlign: 'center',
    justifyContent: 'center',
    MozBoxPack: 'center',
  },
  modal_groups_input_pfimg_img: {
    content: 'default',
    width: '100%',
  },







  header_border: {
    backgroundColor: 'var(--color-border-1)',
    height: '1px',
    width: '1000%',
    content: 'default',
    // position: 'fixed',
  },
  
  container_header_1: {
    content: 'default',
    MozBoxFlex: '1',
    flexGrow: '1',
    mozBoxAlign: 'center',
    alignItems: 'center',
    zIndex: '3',
    userSelect: 'none',
    width: '100vw',
    // height: '50px',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },
  container_header_2: {
    content: 'default',
    width: '100wv',
    // height: '50px',
    backfaceVisibility: 'hidden',
    zIndex: '3',
  },
  container_header_3: {
    content: 'default',
    height: '50px',
    backfaceVisibility: 'hidden',
    top: '0px',
    position: 'fixed',
  },
  container_header_4: {
    content: 'default',
    overflowY: 'hidden',
    MozBoxPack: 'justify',
    justifyContent: 'space-between',
    width: '100vw',
    height: '50px',
    paddingLeft: '12px',
    paddingRight: '12px',
    display: 'flex',
    flexDirection: 'row',
    backfaceVisibility: 'hidden',
    backgroundColor: 'var(--background)',
    borderBottom: '1px solid var(--color-border-1)',
  },

  svg_container: {
    content: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  svg_icon: {
    position: 'relative',
    maxWidth: '30px',
    maxHeight: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '6px !important',
    marginTop: '5px',
    userSelect: 'none',
  },













  group_1_containers_1: {
    backfaceVisibility: 'hidden',
    backgroundColor: 'var(--background)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    MozBoxPack: 'justify',
    justifyContent: 'start',
    alignItems: 'center',
    mozBoxAlign: 'center',
    "@media (max-width: 750px)": {
      width: '15%',
    }
  },
  group_1_child_containers_1: {
    width: '40px',
    height: '40px',
    marginRight: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer !important',
    borderRadius: '50px',
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'liner',
    userSelect: 'none',
    ":hover": {
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'liner',
      backgroundColor: 'var(--hover)',
      cursor: 'pointer',
    },
  },
  // logo styles
  group_1_child_containers_2_main:{
    // height: '45px',
    // marginRight: '8px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    content: 'default',
  },
  group_1_child_containers_2: {
    width: '40px',
    height: '40px',
    marginRight: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
    userSelect: 'none',
  },
  group_1_child_containers_2_h1: {
    minWidth: '32px',
    cursor: 'pointer',
    alignSelf: 'center',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPadding: 'center',
    justifyContent: 'center',
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
    textAlign: 'inherit',
    textDecoration: 'none',
    listStyle: 'none',
    color: 'inherit',
    font: 'inherit',
  },
  group_1_child_containers_2_link: {
    backgroundColor: 'var(--background)',
    outlineStyle: 'none',
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'liner',
    minWidth: '25px',
    minHeight: '25px',
    cursor: 'pointer',
    userSelect: 'none',
    content: 'default',
  },
  group_1_child_containers_2_div: {
    content: 'default',
    fontWeight: '700',
    fontSize: '15px',
    fontFamily: 'var(--font-1)',
    lineHeight: 20,
    overflowWrap: 'break-word',
    minWidth: '0px',
    alignSelf: 'center',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxPadding: 'center',
    justifyContent: 'center',
    MozBoxFlex: '1',
    flexGrow: '1',
    textAlign: 'center',
  },
  group_1_child_containers_2_svg: {
    height: '2rem',
    width: '29px',
    MozBoxFlex: '1',
    flexGrow: '1',
    userSelect: 'none',
    position: 'relative',
    maxWidth: '100%',
    fill: 'currentcolor',
    display: 'inline-block',

  },
  group_1_child_containers_2_svg_2: {
    height: '1.1rem',
    // width: '35px',
    MozBoxFlex: '1',
    flexGrow: '1',
    userSelect: 'none',
    position: 'relative',
    maxWidth: '100%',
    fill: 'currentcolor',
    display: 'inline-block',
    marginLeft: '5px',

  },
  group_1_child_containers_3: {
    width: '45px',
    height: '45px',
    marginRight: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '50px',
  },



  icons_style_center: {
    alignItems: 'center',
    justifyContent: 'center',
    content: 'default'
  },



  group_2_containers_2: {
    width: '100%',
    height: '100%',
    maxWidth: '400px',
    backgroundColor: 'var(--background)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width: 750px)": {
      width: '70%',
    }
  },
  searchbox_container_1: {
    width: '400px',
    minHeight: '32px',
    height: '25px',
    zIndex: '2',
    MozBoxAlign: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    backgroundColor: 'var(--background)',
    // top: '0px',
    position: 'fixed',
    content: 'default',
    "@media (max-width: 750px)": {
      width: '70% !important' ,
    }
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
  },
  searchbox_container_3: {
    zIndex: '4',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
    position: 'relative',
    flex: '1 1 0%',
    content: 'default',
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
  },
  searchbox_container_7: {
    backgroundColor: 'var(--field-color) !important',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'vertical',
    flexDirection: 'column',
    MozBoxPack: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    MozBoxAlign: 'start',
    flexShrink: '1',
    MozBoxFLex: '1',
    flexGrow: '1',
    border: '1px solid var(--color-border-on)',
    borderRadius: '9999px',
    content: 'default',
    width: '100%',
  },
  searchbox_container_8: {
    content: 'default',
  },
  searchbox_container_9_label: {
    cursor: 'text',
    MozBoxDirection: 'normal',
    MozBoxOrinet: 'horizontal',
    flexDirection: 'row',
    content: 'default',
  },
  searchbox_container_10: {
    cursor: 'default',
    MozBoxPack: 'center',
    justifyContent: 'center',
    display: 'flex',
    content: 'default',
  },
  searchbox_container_svg: {
    paddingLeft: '6px',
    marginTop: '3px',
    color: 'rgb(83, 100, 113)',
    minWidth: '32px',
    userSelect: 'none',
    position: 'relative',
    maxWidth: '100%',
    height: '1.25em',
    fill: 'currentcolor',
    display: 'inline-block',
  },
  searchbox_container_11: {
    flexShrink: '1',
    MozBoxFlex: '1',
    flexGrow: '1',
    content: 'default',
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
    backgroundColor: 'var(--field-color) !important',
    width: '375px',
    padding: '5px',
    borderWidth: '0px',
    borderRadius: '9999px',
    "@media (max-width: 750px)": {
      width: '100% !important',
    }
  },

  //-----------Result Box Style-----------//














  group_3_containers_3: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',
    "@media (max-width: 750px)": {
      width: '15%',
    }
  },
  group_3_child_containers_1: {
    // width: '40px',
    // height: '40px',
    // border: '2px dotted #000'
    "@media (max-width: 750px)": {
      display: 'none',
      userSelect: 'none',
      positon: 'fixed',
      top: '1000%',
      right: '1000%',
    }
  },
  group_3_child_containers_2: {
    // width: '40px',
    // height: '40px',
    // border: '3px dotted #000'

  },
  group_3_child_containers_3: {
    // width: '40px',
    // height: '40px',
    // border: '3px dotted #000'
    
  },
  test: {
    width: '70px',
    height: '40px',
    border: '3px solid #000'
  },










  // Sidebar styles

  sidebar: {
    content: 'default',
    userSelect: 'none',
    flexDirection: 'row',
    flex: 'start',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '8888',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
  sideBar_container_1: {
    content: 'default',
    backgroundColor: 'white',
    width: 275,
    height: '100%',
    // position: 'fixed',
    zIndex: '9999',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden',
    "@media (max-width: 750px)": {
      width: '60%',
    },
    "@media (max-width: 450px)": {
      width: '80% !important',  
    },
  },
  sideBar_container_2: {
    content: 'default',
    width: '100vw',
    height: '98vh',
    position: 'fixed',
    zIndex: '8888',
    overflow: 'hidden !important',
  },






  sideBar_container_center: {
    content: 'default',
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'start',
  },
  sideBar_container_Group_1: {
    width: '100%',
    // height: '100%',
    content: 'default',
    alignItems: 'center',
    borderBottom: '1px solid var(--color-border-1)',
  },
  sideBar_profileinfo_1: {
    content: 'default',
    justifyContent: 'center',
    alignItems: 'start',
    width: '80%',
    paddingBottom: '20px',
  },
  sideBar_profileinfo_image: {

  },
  sideBar_profileinfo_content: {

  },
  sideBar_container_Group_2: {
    width: '100%',
    height: '400px',
    content: 'default',
    alignItems: 'center',
  },

  //SideBar List Styles

  sidelist_list_ul:{
    content: 'default',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
  },
  sidelist_list_li:{
    content: 'sidebar hover li',
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: '20px',
  },
  sidelist_container_1: {
    MozBoxDirection: 'normal',
    MozboxOrinet: 'vertical',
    flexDirection: 'column',
    outlineStyle: 'none',
    cursor: 'pointer',
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    MozBoxFlex: '1',
    flexGrow: '1',
    width: '100%',
    paddingBottom: '4px',
    paddingTop: '4px',
    content: 'default',
    display: 'flex',
    // paddingLeft: '15px',
  },
  sidelist_container_2: {
    content: 'sidebar hover container',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px',
    paddingBottom: '10px',
    // paddingLeft: '10px',
    paddingRight: '20px',
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: 9999,
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'liner',
  },
  sidelist_container_3: {
    MozBoxAlign: 'start',
    alignItems: 'flex-start',
    content: 'default',
    display: 'flex',
  },
  sidelist_container_svg: {
    position: 'relative',
    maxWidth: '25px',
    maxHeight: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '6px',
    // marginTop: '5px',
    userSelect: 'none',
    paddingRight: '10px',
  },
  sidelist_container_svg_1: {
    position: 'relative',
    maxWidth: '35px',
    maxHeight: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10px',
    // marginTop: '5px',
    userSelect: 'none',
    paddingRight: '10px',
    fill: 'var(--color-text-3)',
  },
  sidelist_container_svg_2: {
    position: 'relative',
    maxWidth: '20px',
    maxHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '7px',
    // marginTop: '5px',
    userSelect: 'none',
    paddingRight: '10px',
    fill: 'var(--color-text-3)',
  },
  sidelist_container_span: {
    content: 'font default',
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minwidth: '0px',
    font: 'inherit',
    color: 'inherit',
    whiteSpace: 'inherit',    
  },
  username_goup_1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
  },
  username_goup_2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
  },
  username_goup_title_1: {
    whiteSpace: 'wrap',
    fontWeight: '550',
    fontSize: '18px',
    fontFamily: 'var(--font-1)',
    lineHeight: '25px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'start',
    alignItems: 'start',
    color: 'var(--color-text-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default font',
    marginLeft: '10px'
  },
  username_goup_title_2: {
    whiteSpace: 'wrap',
    fontWeight: '500',
    fontSize: '14px',
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
    marginLeft: '10px'
  },



  
});

function Sidebar({ sideBar = false, setSideBar = () => {} }) {
  // console.log(styles.sidelist_container_span);

  const router = useRouter();
  const { data: session } = useSession(); 
  const itemIds = [0, 1, 2, 3];
  const itemIds2 = [0, 1, 2];
  const svg_models = [
    <><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></>,
    <><path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"/></>,
    <><path xmlns="http://www.w3.org/2000/svg" d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></>,
    <><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></>
  ];
  const svg_models2 = [
    <><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z"/><circle cx="12" cy="6.5" r="1.5"/></>,
    <><path xmlns="http://www.w3.org/2000/svg" d="m16 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm7.707 17.707a1 1 0 0 1 -1.414 0l-2.407-2.407a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414zm-6.207-3.707a2.5 2.5 0 1 0 -2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm-4.5 2h-6a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v8a1 1 0 0 0 2 0v-8a3 3 0 0 0 -3-3h-12a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h6a1 1 0 0 0 0-2z"/></>,
    <><path xmlns="http://www.w3.org/2000/svg" d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm0-15a2.993 2.993 0 0 0 -1 5.816v3.184a1 1 0 0 0 2 0v-3.184a2.993 2.993 0 0 0 -1-5.816zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></>,
  ];
  const navigation_titles = [
    'Home',
    'Notifications',
    'Messages',
    'Profile',
  ];
  const navigation_titles2 = [
    'About Webiste',
    'Terms',
    'Privacy Policy'
  ]
  const url1 = [
    'home',
    'notifications',
    'messages',
    'profile',
  ]
  const url2 = [
    'about',
    'terms',
    'privacy'
  ]
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  const MenuItem = ({ i }) => {
    return (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.90 }}
        className={stylex(styles.sidelist_list_li)}
        onClick={() => setSideBar((sideBar) => !sideBar)}
      > 
        <Link href={`/${url1[i]}`} >
          <a className={stylex(styles.sidelist_container_1)} aria-label={url1[i]} role="link">
            <div className={stylex(styles.sidelist_container_2)}>
                <div className={stylex(styles.sidelist_container_3)}>
                  <svg className={stylex(styles.sidelist_container_svg)} fill={router.pathname == `/${url1[i]}` ? "var(--color-active-1) " : ""} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">{svg_models[i]}</svg>
                </div>
                <div className={router.pathname == `/${url1[i]}` ? "active sidelist_container_4" : "sidelist_container_4"} dir="auto">
                  <span className={stylex(styles.sidelist_container_span)}>
                    {navigation_titles[i]}
                  </span>
                </div>
            </div>
          </a>
        </Link >
      </motion.li>
    );
  };
  const MenuItem2 = ({ i }) => {
    return (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.90 }}
        className={stylex(styles.sidelist_list_li)}
        onClick={() => setSideBar((sideBar) => !sideBar)}
      > 
        <Link href={`/${url2[i]}`} >
          <a className={stylex(styles.sidelist_container_1)} aria-label={url2[i]} role="link">
            <div className={stylex(styles.sidelist_container_2)}>
                <div className={stylex(styles.sidelist_container_3)}>
                  <svg className={stylex(styles.sidelist_container_svg)} fill={router.pathname == `/${url2[i]}` ? "var(--color-active-1) " : ""} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">{svg_models2[i]}</svg>
                </div>
                <div className={router.pathname == `/${url2[i]}` ? "active sidelist_container_4" : "sidelist_container_4"} dir="auto">
                  <span className={stylex(styles.sidelist_container_span)}>
                    {navigation_titles2[i]}
                  </span>
                </div>
            </div>
          </a>
        </Link >
      </motion.li>
    );
  };
  
  const variants_nv = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  const Navigation = () => (
    <motion.ul variants={variants_nv} className={stylex(styles.sidelist_list_ul)}>
      {session ? 
        <>
          {itemIds.map(i => (
            <MenuItem i={i} key={i} />
          ))}
          <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.90 }}
            className={stylex(styles.sidelist_list_li)}
            onClick={() => setSideBar((sideBar) => !sideBar), signOut}
          >   
            <div>
              <div className={stylex(styles.sidelist_container_1)}>
                <div className={stylex(styles.sidelist_container_2)}>
                    <div className={stylex(styles.sidelist_container_3)}>
                      <svg className={stylex(styles.sidelist_container_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><><path d="M22.829,9.172,18.95,5.293a1,1,0,0,0-1.414,1.414l3.879,3.879a2.057,2.057,0,0,1,.3.39c-.015,0-.027-.008-.042-.008h0L5.989,11a1,1,0,0,0,0,2h0l15.678-.032c.028,0,.051-.014.078-.016a2,2,0,0,1-.334.462l-3.879,3.879a1,1,0,1,0,1.414,1.414l3.879-3.879a4,4,0,0,0,0-5.656Z"/><path d="M7,22H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7A1,1,0,0,0,7,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7a1,1,0,0,0,0-2Z"/></></svg>
                    </div>
                    <div className='sidelist_container_4' dir="auto">
                      <span className={stylex(styles.sidelist_container_span)}>
                        Log Out
                      </span>
                    </div>
                </div>
              </div>
            </div >
          </motion.li>
        </>
      :
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={stylex(styles.sidelist_list_li)}
          onClick={() => setSideBar((sideBar) => !sideBar)}
        >   
          <Link href='/home'>
            <a className={stylex(styles.sidelist_container_1)} aria-label='/home' role="link">
              <div className={stylex(styles.sidelist_container_2)}>
                  <div className={stylex(styles.sidelist_container_3)}>
                    <svg className={stylex(styles.sidelist_container_svg)} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></></svg>
                  </div>
                  <div className='sidelist_container_4' dir="auto">
                    <span className={stylex(styles.sidelist_container_span)}>
                      Discover
                    </span>
                  </div>
              </div>
            </a>
          </Link >
        </motion.li>
      }
      <div style={{width: '100%', borderBottom: '1px solid var(--color-border-1)'}}></div>
      {/* thi second part */}
      {itemIds2.map(i => (
        <MenuItem2 i={i} key={i} />
      ))}
    </motion.ul>
  );
  
  

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <AnimatePresence> 
      {sideBar && (
        <motion.div 
          className={stylex(styles.sidebar)} 
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}>
          <motion.div
            initial={{ x: "-100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 1 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={stylex(styles.sideBar_container_1)}
          >
            <div className={stylex(styles.sideBar_container_center)}>
              <div className={stylex(styles.sideBar_container_Group_1)}>
                  <div className={stylex(styles.sideBar_profileinfo_1)}>
                    {session ? <>
                      <div className={stylex(styles.username_goup_1)}  onClick={() => router.push('/profile'), () => setSideBar((sideBar) => !sideBar)}>
                      <Avatar style={{marginLeft: '-5px'}} src={session.user.image} css={{ size: "$20" }} size={20}/>
                      <div className={stylex(styles.username_goup_2)}>
                        <div className={stylex(styles.username_goup_title_1)}type="button">
                          <span className={stylex(styles.span)}>
                          {session.user.name}
                          </span>
                        </div>
                        <div className={stylex(styles.username_goup_title_2)}type="button">
                          <span className={stylex(styles.span)}>
                            @{session.user.email}
                          </span>
                        </div>
                      </div>
                    </div>
                      {/* <Avatar style={{marginLeft: '-5px'}}src={session.user.image} css={{ size: "$20" }} /> */}
                    </>
                    :
                    <div className={stylex(styles.username_goup_1)}  onClick={() => router.push('/welcome'), () => setSideBar((sideBar) => !sideBar)}>
                      <Avatar
                        style={{marginLeft: '-5px'}}
                        size={20}
                        css={{ size: "$20" }}
                        icon={
                          <svg className={stylex(styles.sidelist_container_svg_1)} onClick={() => router.push('/welcome'), () => setSideBar((sideBar) => !sideBar)}    xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
                        }
                      />
                      <div className={stylex(styles.username_goup_2)}>
                        <div className={stylex(styles.username_goup_title_1)}type="button" onClick={() => router.push('/welcome'), () => setSideBar((sideBar) => !sideBar)}>
                          <span className={stylex(styles.span)}>
                            Log In Now
                          </span>
                        </div>
                        <div className={stylex(styles.username_goup_title_2)}type="button" onClick={() => router.push('/welcome'), () => setSideBar((sideBar) => !sideBar)}>
                          <span className={stylex(styles.span)}>
                            You're not logged in
                          </span>
                        </div>
                      </div>
                    </div>
                    }
                  </div>
              </div>
              <div className={stylex(styles.sideBar_container_Group_2)}>
                    <Navigation />
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
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setSideBar((sideBar) => !sideBar)}
            className={stylex(styles.sideBar_container_2)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}