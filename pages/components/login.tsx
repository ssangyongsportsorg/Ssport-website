'use client';
import React from 'react';
import { Button } from "flowbite-react";
import { Dropdown, Avatar } from 'flowbite-react';
import Link from 'next/link';
import { LoginLink, LogoutLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default function Login() {
  const Navbar = () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    return (
      <>
        {user?.picture ? (
          <Dropdown inline label={<Avatar alt="User settings" img={`${user?.picture}`} rounded />} >
            <Dropdown.Header>
              <span className="block text-sm">${user.family_name}</span>
              <span className="block truncate text-sm font-medium">{user.email}</span>
            </Dropdown.Header>
            <div> <Link href="/watch-tv">觀看TV</Link></div> 
            <div> <Link href="#">購物</Link> </div> 
            <div> <Link href="/support">幫助</Link> </div> 
            <Dropdown.Divider />
            <div>
              <LogoutLink className="text-subtle">登出</LogoutLink>
            </div>
          </Dropdown>
        ) : (
          <div>
            {user?.given_name?.[0]}
            {user?.email?.[0]}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <button className="break-keep rounded-md px-5 py-1 font-bold">
        <RegisterLink className={buttonVariants({ variant: 'ghost', size: 'sm' })}>
          註冊
        </RegisterLink>
      </button>
    </>
  );
}
