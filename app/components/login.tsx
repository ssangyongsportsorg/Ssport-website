'use client';
import { signIn, signOut, useSession } from "next-auth/react"
import React from 'react';
import { Button } from "flowbite-react";
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import Link from 'next/link'
export default function Login() {
const { data: session, status } = useSession();
if (session) {
return (
<>
<Dropdown inline label={<Avatar alt="User settings" img="${session.user.image}" rounded/>} > <Dropdown.Header> <span className="block text-sm"> {session.user.name}  </span> <span className="block truncate text-sm font-medium"> {session.user.email} </span> </Dropdown.Header> <div> 尚未開放 </div> <div> 尚未開放 </div> <div> 尚未開放 </div> <Dropdown.Divider /> <div>
  <Link href={`/api/auth/signout`} 
                 onClick={(e) => { 
                   e.preventDefault() 
                   signOut() 
                 }} 
               > 
                 登出
               </Link> </div> </Dropdown>
</>
)
}
return (
<>
<Button> 
  <Link
                 href={`/api/auth/signin`} 
                 onClick={(e) => { 
                   e.preventDefault() 
                   signIn() 
                 }} 
               > 
                 登入
               </Link></Button>
</>
)
}
