//@ts-nocheck
import stylex from "@ladifire-opensource/stylex";
import React from "react";
import { AnimatePresence, motion, } from "framer-motion";
import Image from "next/image";
// import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Link from "next/link";
import { Profile_info_sm } from "./profile_comps.tsx";
import { Header_buttons } from "./buttons/header_buttons.tsx";
import { Box } from "./Pages/FinalePage";

export default function Flayout({ children }) {

  const router = useRouter();
  const [sideBar, setSideBar] = React.useState(false);
  
  const { asPath } = useRouter()
  const pageId = asPath.charAt(asPath.length - 1);
  // const PageValue = `/p/${pageId}` == asPath
  // console.log(router.pathname)
  return (
    <>
      <div  style={{height: "100%", display: 'flex'}}>
        {/* <Sidebar {...{ sideBar, setSideBar }} /> */}
        <div className={stylex(styles.container_1)}>
            <div className={stylex(styles.container_2)}>
              <Box style={{pointerEvents: 'all !important' }}/>
              <motion.div 
                animate={{
                  scale: sideBar  ? 0.8 : 1,
                  opacity: sideBar ? 0.5 : 1
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className={stylex(styles.container_3)}
                style={{ overflow: "hidden", pointerEvents: 'none', width: "97vw", height: "97vw"}}

                > 
                <header className={stylex(styles.container_header_1)} role="banner">
                  <div className={stylex(styles.container_header_2)} style={{ visibility: 'revert' }}>
                    <div className={stylex(styles.container_header_3)}>
                      <div className={stylex(styles.container_header_4)}>
                          {/* Logo */}
                        <div className={stylex(styles.group_1_containers_1)}> 
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
                          <Header_buttons />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stylex(styles.header_border)}></div>
                </header>
                {children}
              </motion.div>
            </div>
        </div>
      </div>
    </>
  )
}



const styles = stylex.create({
  container_1: {
    pointerEvents: 'none !important',
    flex: '1 1 0%',
    content: 'default',
    overflowX: 'hidden',
    // width: '96vw',
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
  },
  group_1_child_containers_1: {
    width: '40px',
    height: '40px',
    marginRight: '8px',
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
    backgroundColor: 'var(--background)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    flexShrink: '1',
    MozBoxFLex: '1',
    flexGrow: '1',
    border: '1px solid var(--color-border-on)',
    borderRadius: '9999px',
    content: 'default',
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
  },

  //-----------Result Box Style-----------//
  // searchbox_result_box_container_1: {
  //   width: '100%',
  //   height: '100px',
  //   backgroundColor: 'var(--field-color) !important',
  //   zIndex: '-1',
  //   position: 'absolute',
  //   paddingLeft: '2px',
  //   // paddingRight: '6px',
  //   borderRadius: '25px',
  //   marginTop: '69px',
  // },




  group_3_containers_3: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end'
  },
  group_3_child_containers_1: {
    // width: '40px',
    // height: '40px',
    // border: '2px dotted #000'
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
    borderBottom: '1px solid black',
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
    paddingLeft: '15px',
  },
  sidelist_container_2: {
    content: 'sidebar hover container',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '20px',
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: 9999,
    transitionProperty: 'background-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'liner',
  },
  sidelist_container_3: {

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
  sidelist_container_span: {
    content: 'font default',
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minwidth: '0px',
    font: 'inherit',
    color: 'inherit',
    whiteSpace: 'inherit',
  },
});