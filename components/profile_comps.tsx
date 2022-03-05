import stylex from "@ladifire-opensource/stylex";
import { useSession } from "next-auth/react";

export const Profile_info_sm = () => {
  return (
    <div className={stylex(styles.Profile_info_sm_continer_1)}>
      <div className={stylex(styles.Profile_info_sm_continer_2)}>
        <div className={stylex(styles.Profile_info_sm_continer_3)}>
          <div className={stylex(styles.Profile_info_sm_continer_4)}>
            <div className={stylex(styles.Profile_info_sm_continer_5)}>
              <div className={stylex(styles.Profile_info_sm_continer_6)}>
                <div className={stylex(styles.Profile_info_sm_continer_7)}>
                  <div className={stylex(styles.Profile_info_sm_continer_8)}>
                    <div className={stylex(styles.Profile_info_sm_continer_9)} aria-hidden={true} role="presentation">
                      <div className={stylex(styles.Profile_info_sm_continer_10)}>
                        <div className={stylex(styles.Profile_info_sm_continer_11)}>
                          <div className={stylex(styles.Profile_info_sm_continer_12)}>
                            <div className={stylex(styles.Profile_info_sm_continer_13)}>
                              <img className={stylex(styles.Profile_info_sm_continer_14)} src="https://pbs.twimg.com/profile_images/1466450650884153344/-2rTxv9E_bigger.jpg" alt="" />
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
      <div className={stylex(styles.Profile_info_sm_content_continer_1)}>
        <div className={stylex(styles.Profile_info_sm_content_continer_2)}>
          <div className={stylex(styles.Profile_info_sm_content_continer_3)}>
            <div className={stylex(styles.Profile_info_sm_content_continer_4)}>
              <div className={stylex(styles.Profile_info_sm_content_continer_5)}>
                <div className={stylex(styles.Profile_info_sm_content_continer_6)} dir="auto" ><span className={stylex(styles.Profile_info_sm_content_continer_span)}><span className={stylex(styles.Profile_info_sm_content_continer_span)}>wekztr</span></span></div>
              </div>
              <div className={stylex(styles.Profile_info_sm_content_continer_7)}>
                <div className={stylex(styles.Profile_info_sm_content_continer_8)} dir="ltr" ><span >@wekztr</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Profile_info_sm_2 = () => {
  
  const { data: session } = useSession();
  return (
    <div className={stylex(styles.Profile_info_sm_2_continer_1)}>
      <div className={stylex(styles.Profile_info_sm_2_continer_2)}>
        <div className={stylex(styles.Profile_info_sm_2_continer_3)}>
          <div className={stylex(styles.Profile_info_sm_2_continer_4)}>
            <div className={stylex(styles.Profile_info_sm_2_continer_5)}>
              <div className={stylex(styles.Profile_info_sm_2_continer_6)}>
                <div className={stylex(styles.Profile_info_sm_2_continer_7)}>
                  <div className={stylex(styles.Profile_info_sm_2_continer_8)}>
                    <div className={stylex(styles.Profile_info_sm_2_continer_9)} aria-hidden={true} role="presentation">
                      <div className={stylex(styles.Profile_info_sm_2_continer_10)}>
                        <div className={stylex(styles.Profile_info_sm_2_continer_11)}>
                          <div className={stylex(styles.Profile_info_sm_2_continer_12)}>
                            <div className={stylex(styles.Profile_info_sm_2_continer_13)}>
                              <img className={stylex(styles.Profile_info_sm_2_continer_14)} src={session?.user?.image} alt="" />
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
  )
}


const styles = stylex.create({
  Profile_info_sm_continer_1: {
    content: 'default',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
  },
  Profile_info_sm_continer_2: {
    flexBasis: '75px',
    marginRight: '12px',
    MozBoxFlex: '0',
    flexGrow: '0',
    MozBoxPack: 'center',
    justifyContent: 'center',
    content: 'default',
  },
  Profile_info_sm_continer_3: {
    height: '75px',
    width: '100%',
    overflow: 'visible',
    display: 'block',
    content: 'default',
  },
  Profile_info_sm_continer_4: {
    paddingBottom: '100%',
    width: '100%',
    display: 'block',
  },
  Profile_info_sm_continer_5: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0px',
  },
  Profile_info_sm_continer_6: {
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    left: '50%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'visible',
    display: 'block',
    content: 'default',
  },
  Profile_info_sm_continer_7: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0px',
  },
  Profile_info_sm_continer_8: {
    height: 'calc(100% + 4px)',
    width: 'calc(100% + 4px)',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    bottom: '0px',
    overflow: 'hidden',
    borderRadius: '9999px',
    content: 'default',
  },
  Profile_info_sm_continer_9: {
    height: '100%',
    width: '100%',
    backgroundColor: 'var(--background)',
    outlineStyle: 'none',
    content: 'default',
  },  
  Profile_info_sm_continer_10: {
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    left: '50%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '9999px',
    content: 'default',
  },
  Profile_info_sm_continer_11: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
  },
  Profile_info_sm_continer_12: {
    zIndex: '0',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    overflow: 'hidden',
    content: 'default',
  },
  Profile_info_sm_continer_13: {
    pointerEvents: 'none !important',
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    left: '50%',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '9999px',
    height: '100%',
    width: '100%',
    content: 'default',
  },
  Profile_info_sm_continer_14: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '-1',
    backgroundColor: 'var(--background)',
    height: '100%',
    width: '100%',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    content: 'default',
    // position: 'absolute',
  },
  Profile_info_sm_content_continer_1: {
    // MozBoxPack: 'center',
    justifyContent: 'center',
    flexbasis: '0px',
    // MozBoxFlex: '1',
    content: 'default',
  },
  Profile_info_sm_content_continer_2: {
    MozBoxPack: 'justify',
    justifyContent: 'start',
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    content: 'default',
  },
  Profile_info_sm_content_continer_3: {
    outlineStyle: 'none',
    flexShrink: '1',
    maxWidth: '100%',
    content: 'default',
  },
  Profile_info_sm_content_continer_4: {
    outlineStyle: 'none',
    flexShrink: '1',
    maxWidth: '100%',
    content: 'default',
  },
  Profile_info_sm_content_continer_5: {
    MozBoxAlign: 'center',
    alignItems: 'center',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    maxWidth: '100%',
    content: 'default',
  },
  Profile_info_sm_content_continer_6: {
    whiteSpace: 'nowrap',
    fontWeight: '550',
    fontSize: '20px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-2)',
    overflow: 'hidden',
    display: 'flex',
    content: 'default',
  },
  Profile_info_sm_content_continer_span: {
    fontFamily: 'inherit',
    overflowWrap: 'break-word',
    minWidth: '0px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    content: 'default',
  },
  Profile_info_sm_content_continer_7: {
    flexShrink: '1',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    content: 'default',
  },
  Profile_info_sm_content_continer_8: {
    whiteSpace: 'nowrap',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: 'var(--font-1)',
    lineHeight: '20px',
    overflowWrap: 'break-word',
    minWidth: '0px',
    MozBoxAlign: 'center',
    alignItems: 'center',
    color: 'var(--color-text-3)',
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    content: 'default', 
  },





  // sm 2
  
  Profile_info_sm_2_continer_1: {
    content: 'default',
    MozBoxDirection: 'normal',
    MozBoxOrient: 'horizontal',
    flexDirection: 'row',
    cursor: 'pointer !important',
    zIndex: '9999',
  },
  Profile_info_sm_2_continer_2: {
    flexBasis: '36px',
    marginRight: 'calc(45px)',
    MozBoxFlex: '0',
    flexGrow: '0',
    MozBoxPack: 'center',
    justifyContent: 'center',
    content: 'default',
    cursor: 'pointer',
    zIndex: '9999',
  },
  Profile_info_sm_2_continer_3: {
    height: '36px',
    width: '100%',
    overflow: 'visible',
    display: 'block',
    content: 'default',
  },
  Profile_info_sm_2_continer_4: {
    paddingBottom: '100%',
    width: '100%',
    display: 'block',
  },
  Profile_info_sm_2_continer_5: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0px',
  },
  Profile_info_sm_2_continer_6: {
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    left: '50%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'visible',
    display: 'block',
    content: 'default',
  },
  Profile_info_sm_2_continer_7: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0px',
  },
  Profile_info_sm_2_continer_8: {
    height: 'calc(100% + 4px)',
    width: 'calc(100% + 4px)',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    bottom: '0px',
    overflow: 'hidden',
    borderRadius: '9999px',
    content: 'default',
  },
  Profile_info_sm_2_continer_9: {
    height: '100%',
    width: '100%',
    backgroundColor: 'var(--background)',
    outlineStyle: 'none',
    content: 'default',
  },  
  Profile_info_sm_2_continer_10: {
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    left: '50%',
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '9999px',
    content: 'default',
  },
  Profile_info_sm_2_continer_11: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
  },
  Profile_info_sm_2_continer_12: {
    zIndex: '0',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    overflow: 'hidden',
    content: 'default',
  },
  Profile_info_sm_2_continer_13: {
    pointerEvents: 'none !important',
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    left: '50%',
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '9999px',
    height: '100%',
    width: '100%',
    content: 'default',
  },
  Profile_info_sm_2_continer_14: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    zIndex: '-1',
    backgroundColor: 'var(--background)',
    height: '100%',
    width: '100%',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    content: 'default',
    // position: 'absolute',
  },
})
