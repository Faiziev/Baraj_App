import Head from 'next/head';
import Link from 'next/link';
import stylex from "@ladifire-opensource/stylex";
import P_Home from "../components/Pages/P_Home.tsx"
import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  // console.log(session)
  useEffect(() => {
    // console.log(session)
    if (!session) {
      router.push('/welcome')
    }else {
      router.push('/home')
    }
  }, []);

  
  return (
    <>
        
    </>
  )
}



export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: { session }
  }
}
