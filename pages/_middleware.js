import { getToken } from 'next-auth/jwt';
import { NextResponse, NextRequest, NextFetchEvent } from 'next/server'
import { getSession } from 'next-auth/react';
// export async function middleware(req, ev) {
//     const { pathname } = req.nextUrl
//     if (pathname == '/') {
//         return NextResponse.redirect('/welcome')
//     }
//     return NextResponse.next()
// }

export async function middleware(req, ev) {
  // // return early if url isn't supposed to be protected
  // if (!req.url.includes("/protected-url")) {
  //   return NextResponse.next()
  // }
  // const session = await getToken({ req, secret: process.env.SECRET })
  // const { pathname } = req.nextUrl
  // if (pathname == '/') {
  //     return NextResponse.redirect('/welcome')
  // }

  // // You could also check for any property on the session object,
  // // like role === "admin" or name === "John Doe", etc.
  // if (!session) {
  //   return NextResponse.redirect("/welcome")
  //   console.log(session)
  // }
  // // If user is authenticated, continue.
  // return NextResponse.next()
}