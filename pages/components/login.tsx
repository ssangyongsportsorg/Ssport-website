'use client';
import React from 'react';
import { Button } from "flowbite-react";
import { Dropdown, Avatar } from 'flowbite-react';
import Link from 'next/link';
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Login() {
    const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <nav className="nav container">
        <h1 className="text-display-3">KindeAuth</h1>
        <div>
          {!isAuthenticated() ? (
            <>
              <LoginLink className="btn btn-ghost sign-in-btn">
                Sign in
              </LoginLink>
              <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
            </>
          ) : (
            <div className="profile-blob">
              {user?.picture ? (
                <img
                  className="avatar"
                  src={user?.picture}
                  alt="user profile avatar"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="avatar">
                  {user?.given_name?.[0]}
                  {user?.family_name?.[0]}
                </div>
              )}
              <div>
                <p className="text-heading-2">
                  {user?.given_name} {user?.family_name}
                </p>
                <LogoutLink className="text-subtle">Log out</LogoutLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
