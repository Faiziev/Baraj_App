//@ts-nocheck
import Head from 'next/head';
import Link from 'next/link';
import stylex from "@ladifire-opensource/stylex";
import { AnimatePresence, motion } from "framer-motion";
import React from 'react';
import Home from '../../pages/home';
import { items } from './data';


export function P_Home({ children }) {
  return (
    <>
      <>
      <Home />
      </>
    </>
  )
}

const styles = stylex.create({
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px',
    background: 'var(--background)',
    zIndex: '1',
    content: 'default', 
  },
  container_6: {
    // maxWidth: '100%',
    // width: '100% !important',
    // height: '90vh !important',
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
    // transitionDuration: '1s',
    // transitionTimingFunction: 'liner',
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
  },
  listItem_container_6_group_1_img: {
    width: '100%',
    height: '100%',
    boxShadow: 'var(--shadow-1)',
    borderRadius: '16px',
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
    fontSize: '14px',
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