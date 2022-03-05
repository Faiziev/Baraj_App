import React from 'react';
import stylex from "@ladifire-opensource/stylex";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Link } from 'next/link';

export default function CreatePost() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/home')
  },[])
  return (
    <>
    </>
  );
}
